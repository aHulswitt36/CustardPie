var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  date: Date,
  time: String,
  venue: String,
  location: String
});

module.exports = mongoose.model('schedule', ScheduleSchema);
