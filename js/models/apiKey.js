CustardPie.ApiKey = DS.Model.extend({
  accessToken: DS.attr('string'),
  user: DS.belongsTo('adminUser', {async: true})
})
