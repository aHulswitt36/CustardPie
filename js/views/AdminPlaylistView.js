CustardPie.AdminPlaylistView = Ember.View.extend({
  actions: {
		addBand: function(){
			this.$('#addBand').slideToggle();
		},
		saveBand: function(){
			var newBand = {
				name: this.$('#addName').val()
			};
			this.get('controller').send('saveNewBand', newBand);
			this.$('#addBand').slideToggle();
		}
	}
});