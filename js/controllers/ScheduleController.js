CustardPie.ScheduleController = Ember.ArrayController.extend({
  sortedContent: Ember.computed.sort('content.@each.date', function(a, b){
       var ap = moment(Ember.get(a, 'date')),
           bp = moment(Ember.get(b, 'date'))

      if(ap !== bp) {
        return ap - bp;
      }
    })
});
