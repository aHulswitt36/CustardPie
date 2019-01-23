import Ember from 'ember';

export default Ember.Component.extend({
  sortedSongs: Ember.computed.sort('songs', 'sortDefinition'),
  sortDefinition: ['title']
});
