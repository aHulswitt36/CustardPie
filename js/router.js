CustardPie.Router.map(function(){
	this.resource('default', { path: '/' }, function(){
		this.resource('home', { path: '/'});
		this.resource('schedule');
		this.resource('playlist');
		this.resource('photos');
	});
	
	this.resource('admin', { path: '/admin' }, function(){
		this.resource('adminHome', { path: '/' });
		this.resource('adminSchedule', {path: '/schedule'});
		this.resource('adminPlaylist', {path: '/playlist'});
		this.resource('adminPhotos', {path:'/photos'});
	});
});


CustardPie.ScheduleRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('schedule');
	}
});

CustardPie.PlaylistRoute = Ember.Route.extend({
	model: function(){
		return playlist;
	}
});


//ADMIN ROUTES
CustardPie.AdminScheduleRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('schedule');
	}
});

CustardPie.AdminPlaylistRoute = Ember.Route.extend({
	model: function(){
		return playlist;//this.store.find('playlist');
	}
})