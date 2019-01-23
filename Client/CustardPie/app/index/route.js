import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(){
    return this.get('store').findAll('schedule')
    .then(events => events.sortBy('date'))
    .then(function(events){
      return events.filter(function(event){
        var date = moment(event.get('date'));

        if(date.diff(moment(), 'days') >= 0)
        {
          return event;
        }
      }).slice(0,3);
    });
  }
});
