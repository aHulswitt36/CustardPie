CustardPie.AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition){
    if(Ember.isEmpty(this.controllerFor('login').get('token'))) {
      return this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition){
    this.controllerFor('login').set('attemptedTransition', transition);
    return this.transitionTo('login');
  },

  actions: {
    error: function(reason, transition){
      if(reason.status = 401){
        this.redirectToLogin(transition);
      }else{
        console.log('unknown problem');
      }
    }
  }
});
