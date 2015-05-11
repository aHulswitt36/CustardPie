CustardPie.AdminUser = DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  apiKeys: DS.hasMany('apiKey'),
  errors: {}
});
