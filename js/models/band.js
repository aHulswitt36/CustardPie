CustardPie.Band = DS.Model.extend({
  name: DS.attr('string'),
  songs: DS.hasMany('song')
});

CustardPid.Band.FIXTURES = [

];