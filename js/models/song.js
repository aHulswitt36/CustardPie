CustardPie.Song = DS.Model.extend({
  title: DS.attr('string'),
  band: DS.belongsTo('band')
});

CustardPie.Song.FIXTURES = [

];