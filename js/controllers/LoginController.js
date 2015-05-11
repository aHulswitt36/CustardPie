CustardPie.LoginController = Ember.Controller.extend({
  init: function(){
    this._super();
    if(Ember.$.cookie('access-token')){
      Ember.$.ajaxSetup({
        headers: {
          'Authorization': 'Bearer ' + Ember.$.cookie('access_token')
        }
      });
    }
  },

  attemptedTransition:  null,
  token:                Ember.$.cookie('access_token'),
  currentUser:          Ember.$.cookie('auth_user'),

  tokenChanged: (function(){
    if(Ember.isEmpty(this.get('token'))){
      Ember.$.removeCookie('access_token');
      Ember.$.removeCookie('auth_user');
    }else{
      Ember.$.cookie('access_token', this.get('token'));
      Ember.$.cookie('auth_user', this.get('currentUser'));
    }
  }).observes('token'),

  reset: function(){
    this.setProperties({
      username_or_email:  null,
      password:           null,
      token:              null,
      currentUser:        null
    });
    Ember.$.ajaxSetup({
      headers:{
        'Authorization': 'Bearer none'
      }
    });
  },

  actions: {
    loginUser: function(){
      var _this = this;

      var attemptedTrans =  this.get('attemptedTransition');
      var data =            this.getProperties('username_or_email', 'password');

      this.setProperties({
        username_or_email:  null,
        password:           null
      });

      Ember.$.post('/session', data).then(function(response){
        Ember.$.ajaxSetup({
          headers:{
            'Authorization': 'Bearer ' + response.api_key.access_token
          }
        });

        var key = _this.get('store').createRecord('apiKey', {
          accessToken: response.api_key.access_token
        });

        _this.store.find('user', response.api_key.user_id).then(function(user){
          _this.setProperties({
            token: response.api_key.access_token,
            currentUser: user.getProperties('username', 'name', 'email')
          });

          key.set('user', user);
          key.save();

          user.get('apiKeys').content.push(key);

          if(attemptedTrans){
            attemptedTrans.retry();
            _this.set('attemptedTransistion', null);
          }else{
            _this.transitionToRoute('adminHome');
          }
        });
      }, function(error){
        if(error.status === 401){
          alert("Wrong username or password, please try again");
        }
      });
    }
  }
});
