import Ember from 'ember';

export default Ember.Controller.extend({
  groupedByBandName: Ember.computed('model.bands.@each.bandName', function() {
    var result = [];
    this.get('model').forEach(function(band) {
      var group = Ember.get(band, 'bandName')[0];
      var hasGroup = !!result.findBy('group', Ember.get(band, 'bandName')[0]);

      if (!hasGroup) {
        result.pushObject(Ember.Object.create({
          group: group,
          content: []
        }));
      }
      result.findBy('group', group).get('content').pushObject(band);
    });
    return result;
  })

});
