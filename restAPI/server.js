var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowCrossDomain);

var port = process.env.port || 8080;

mongoose.connect('mongodb://localhost/test');
var Schedule = require('./models/schedule');
var Band = require('./models/band').Band;
var Song = require('./models/band').Song;

var router = express.Router();

router.use(function(req, res, next){
  console.log('somthing is happening');
  next();
});

router.get('/', function(req, res){
  res.json({ message : 'hooray! welcome'});
});

router.route('/schedules')
  .post(function(req, res){
    var schedule = new Schedule();
    schedule.date = req.body.date;
    schedule.time = req.body.time;
    schedule.venue = req.body.venue;
    schedule.location = req.body.location;

    schedule.save(function(err){
      if(err)
        res.send(err);


      res.json({ message: "Schedule created!"});
    });
  })
  .get(function(req, res){
    Schedule.find(function(err, schedules){
      if(err)
        res.send(err);

      res.json({schedules: schedules});
    });
  });

router.route('/schedules/:schedule_id')
  .get(function(req, res){
    Schedule.findById(req.params.schedule_id, function(err,schedule){
      if(err)
        res.send(err);

      res.json(schedule);
    });
  })
  .put(function(req, res){
    Schedule.findById(req.params.schedule_id, function(err, schedule){
      if(err)
        res.send(err);

      schedule.date = req.body.date;
      schedule.time = req.body.time;
      schedule.venue = req.body.venue;
      schedule.location = req.body.location;

      schedule.save(function(err){
        if(err)
          res.send(err);

        res.json({ message: "Schedule Updated!"});
      });
    });
  })
  .delete(function(req, res){
    Schedule.remove({
      _id: req.params.schedule_id
    }, function(err, schedule){
      if(err)
        res.send(err);

      res.json({success: true});
    });
  });

router.route('/bands')
  .get(function(req, res){
    Band.find(function(err, bands){
      if(err)
        res.send(err);

      console.log(bands.length + " hey");
      res.json({bands: bands});
    });
  })
  .post(function(req, res){
    console.log("Got Here");
    var band = new Band();
    band.bandName = req.body.bandName;
    var songs = [];
    req.body.songs.forEach(function(song){
        var newSong = new Song();
        newSong.title = song.title;
        newSong._band = band._id;
        newSong.save(function(err){
          if(err)
            res.send(err);
        });
        songs.push(newSong);
    });
    band.songs = songs;

    band.save(function(err){
      if(err)
        res.send(err);

      res.send(band);
      console.log('Band Created');
    });
  })

router.route('/bands/:band_id')
  .get(function(req, res){
    Band.findById(req.params.band_id, function(err, band){
      if(err)
        res.send(err);

      res.json(band);
    });
  })
  .put(function(req, res){
    Band.findById(req.params.band_id, function(err, band){
      if(err)
        res.send(err);

      if(req.body.bandName != null){
          band.bandName = req.body.bandName;
      }

      if(req.body.songs != null){
        band.songs = [];
        var songs = [];
        req.body.songs.forEach(function(song){
            var newSong = new Song();
            newSong.title = song.title;
            songs.push(newSong);
        });
        band.songs = songs;
      }

      band.save(function(err){
        if(err)
          res.send(err);
        res.send(band);
        res.json({success: true});
      });
    });
  })
  .delete(function(req, res){
    Band.remove({
      _id: req.params.band_id
    }, function(err, band){
      if(err)
        res.send(err);

      res.json({success: true});
    });
  });

//get all songs for a band
router.route('/songs/:band_id')
  .get(function(req, res){
    Song.find({_band: req.params.band_id}, function(err, songs){
      if(err)
        res.send(err);

      res.json({songs:songs});
    });
  });

router.route('/songs/:song_id')
  .put(function(req, res){
    Song.findById(req.params.song_id, function(err, song){
      if(err)
        res.send(err);
      console.log(req.body.title);
      console.log(song);
      song.title = req.body.title;

      song.save(function(err){
        if(err)
          res.send(err);
        res.json({success: true})
      });
    });
  })
  .delete(function(req, res){
    Song.remove({
      _id: req.params.song_id
    }, function(err, band){
      if(err)
        res.send(err);

      res.json({success: true});
    })
  })

app.use('/api', router);

app.listen(port);
console.log('magic happens at port ' + port);
