CustardPie.PlaylistController = Ember.ArrayController.extend({
  groupedByBandName: Ember.computed('content.@each.name', function(){
    var result = [];
    this.get('content').forEach(function(item){
      var hasGroup = !!result.findBy('group', Ember.get(item, 'name')[0]);
      
      if(!hasGroup){
        result.pushObject(Ember.Object.create({
          group: Ember.get(item, 'name')[0],
          content: []
        }));
      }
      
      result.findBy('group', Ember.get(item, 'name')[0]).get('content').pushObject(item);
    });
    return result;
  })
});