import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findAll('member')
            .then(function(members){
              return members.find(function(m){
                return m.get('name').toLowerCase() === params.member_name.replace('_', ' ');
              });
            });
  }
});
