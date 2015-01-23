CustardPie.PlaylistController = Ember.ArrayController.extend({
  groupedByBandName: Ember.computed('content.@each.bandName', function(){
    var result = [];
    this.get('content').forEach(function(item){
      var hasGroup = !!result.findBy('group', Ember.get(item, 'bandName')[0]);

      if(!hasGroup){
        result.pushObject(Ember.Object.create({
          group: Ember.get(item, 'bandName')[0],
          content: []
        }));
      }

      result.findBy('group', Ember.get(item, 'bandName')[0]).get('content').pushObject(item);
    });
    return result;
  })
});
