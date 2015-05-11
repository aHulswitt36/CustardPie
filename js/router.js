
CustardPie.Router.map(function(){
	this.resource('default', { path: '/' }, function(){
		this.resource('home', { path: '/'});
		this.resource('schedule');
		this.resource('playlist');
		/* this.resource('photos', {path: "/photos"}, function(){
			this.route("selectedPhoto", {path: "/:photo_id"})
		}); */
		this.resource('contact');
	});

	this.resource('admin', { path: '/admin' }, function(){
		this.resource('login', {path: '/login'});
		this.resource('adminHome', { path: '/' });
		this.resource('adminSchedule', {path: '/schedule'});
		this.resource('adminPlaylist', {path: '/playlist'});
		this.resource('adminPhotos', {path:'/photos'});
    this.resource('adminPhoto', {path: '/photos/photo/add'});
    this.resource('adminBand', {path: '/band/:band_id'}, function(){
			this.resource('song', {path: '/song/:song_id'});
		});
	});
});

CustardPie.ApplicationRoute = Ember.Route.extend({
	actions: {
		logout: function(){
			this.controllerFor('login').reset();
			this.transitionTo('login');
		}
	}
});

CustardPie.ScheduleRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('schedule');
	}
});

CustardPie.PlaylistRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('band');
	}
});

/* CustardPie.PhotosRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('photo');
	}
}); */


//ADMIN ROUTES
CustardPie.LoginRoute = Ember.Route.extend({
	setupController: function(controller, context){
		controller.reset();
	},
	beforeModel: function(transition){
		if(!Ember.isEmpty(this.controllerFor('login').get('token'))){
			this.transitionTo('adminHome');
		}
	}
});

CustardPie.AdminHomeRoute = CustardPie.AuthenticatedRoute.extend();

CustardPie.AdminScheduleRoute = CustardPie.AuthenticatedRoute.extend({
	model: function(){
		return this.store.find('schedule');
	}
});

CustardPie.AdminPlaylistRoute = CustardPie.AuthenticatedRoute.extend({
	model: function(){
		return this.store.find('band');
	}
});

CustardPie.AdminBandRoute = CustardPie.AuthenticatedRoute.extend({
  model: function(params){
     var band = this.store.find('band', params.band_id);

     return band;
  }
});

CustardPie.AdminPhotosRoute = CustardPie.AuthenticatedRoute.extend({
  model: function(){
    return this.store.find('photo');
  }
});
