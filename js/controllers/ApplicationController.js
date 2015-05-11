CustardPie.ApplicationController = Ember.Controller.extend({
  needs:          ['login'],
  currentUser:    (function(){
    return this.get('controllers.login.currentUser');
  }).property('controllers.login.currentUser'),

  isAuthenticated: (function(){
    return !Ember.isEmpty(this.get('controllers.login.currentUser'));
  }).property('controllers.login.currentUser')
});
