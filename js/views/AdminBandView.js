CustardPie.AdminBandView = Ember.View.extend({
	actions: {
		addSong: function(){
			this.$('#addSong').slideToggle();
		},
		saveSong: function(){
			var newSong = {
				title: this.$('#addTitle').val()
			};
			this.get('controller').send('saveNewSong', newSong);
			this.$('#addSong').slideToggle();
		}
	}
});