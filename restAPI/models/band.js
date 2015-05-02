var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BandSchema = new Schema({
  bandName: {type: String, required: true},
  //songs: [{type: Schema.Types.ObjectId, ref:'song'}]
  songs: [SongSchema]
});

var SongSchema = new Schema({
  title: {type: String, required: true},
  //_band: {type: Schema.Types.ObjectId, ref:'band'}
});

var band = mongoose.model('Band', BandSchema);
var song = mongoose.model('Song', SongSchema);

module.exports = {
  Band: band,
  Song: song
};
