import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').findAll('schedule').then(s => s.sortBy('date'));
  }
});
