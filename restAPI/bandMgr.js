var mongo = require( 'mongodb' );

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;
	
// var server = new Server( 'localhost', 27017, {auto_connect: true} );

// db = new Db( 'banddb', server, {safe:false});
// db.open(function(err, db) {
    // if(!err) {
        // console.log("Connected to 'locationdb' database");
        // db.collection('locations', {strict:true}, function(err, collection) {
            // if (err) {
                // console.log("The 'locations' collection doesn't exist yet.");
            // }
        // });
    // } else {
        // console.log("Error while connecting to the locationdb : " + err);
    // }
// });

exports.getShowById = function( req, res ){
	var id = req.params.id;
	
	db.collection('shows', function( err, collection ) {
		collection.findOne({ '_id':new BSON.ObjectID(id) }, function( err, item ){
			res.json({show:item});
		});
	});
};

exports.getAllShows = function( req, res ){
	db.collection( 'shows', function( err, collection ){
		collection.find().toArray( function( err, items ){
			var allLocations = {
				locations:items
			};
			res.send( allLocations );
		});
	});
};

exports.addShow = function( req, res ){
	var show = req.body.show;
	
	db.collection( 'shows', function( err, collection ){
		collection.insert( location, {safe:true}, function( err, result ){
			if( err ){
				res.send({'error':'An error has occurred: ' + err });
			} else {
				var record = result[0];
				res.json({show:record});
			}
		});
	});
};

exports.updateShow = function( req, res ){
	var id = req.params.id;
	var show = req.body.show;
	
	db.collection( 'shows', function( err, collection ){
		collection.update( { '_id':new BSON.ObjectID(id) }, show, {safe:true}, function( err, result ){
			if( err ){
				res.send({'error':'An error has occurred: ' + err });
			} else{
				show._id = id;
				res.json({show:show});
			}
		});
	});
};

exports.deleteShow = function( req, res ){
	var id = req.params.id;
	
	db.collection( 'shows', function( err, collection ){
		collection.remove( {'_id':new BSON.ObjectID(id)}, {safe:true}, function( err, result ){
			if( err ){
				res.send({'error':'An error has occurred: ' + err });
			} else{
				res.json({});
			}
		});
	});
};