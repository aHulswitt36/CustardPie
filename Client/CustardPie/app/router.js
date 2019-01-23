import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('schedule');
  this.route('playlist');
  this.route('photos', function() {
    this.route('selectedPhoto', {path: '/:photo_id'});
  });
  this.route('members', function(){
    this.route('member', {path: '/:member_name'});
  });  
});

export default Router;
