
CustardPie.Router.map(function(){
	this.resource('default', { path: '/' }, function(){
		this.resource('home', { path: '/'});
		this.resource('schedule');
		this.resource('playlist');
		this.resource('photos', {path: "/photos"}, function(){
			this.route("selectedPhoto", {path: "/:photo_id"})
		});
		this.resource('contact');
	});

	this.resource('admin', { path: '/admin' }, function(){
		this.resource('adminHome', { path: '/' });
		this.resource('adminSchedule', {path: '/schedule'});
		this.resource('adminPlaylist', {path: '/playlist'});
		this.resource('adminPhotos', {path:'/photos'});
    this.resource('adminPhoto', {path: '/photos/photo/add'});
    this.resource('adminBand', {path: '/band/:band_id'});
	});
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

CustardPie.PhotosRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('photo');
	}
});

// CustardPie.ContactRoute = Ember.Router.extend({
// 	model: function(){
//
// 	}
// })


//ADMIN ROUTES
CustardPie.AdminScheduleRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('schedule');
	}
});

CustardPie.AdminPlaylistRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('band');
	}
});

CustardPie.AdminBandRoute = Ember.Route.extend({
  model: function(params){
     var band = this.store.find('band', params.band_id);
     return band;
  }
});

CustardPie.AdminPhotosRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('photo');
  }
});
