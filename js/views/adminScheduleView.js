CustardPie.AdminScheduleView = Ember.View.extend({
	actions: {
		addEvent: function(){
			this.$('#addDate').datepicker();
			this.$('#addTime').timepicker({
				'minTime': '6:00pm',
				'maxTime': '1:00am',
				'timeFormat': 'g:i a'
			});
			this.$('#addEvent').slideToggle();
		},
		saveEvent: function(){
			var m = moment(this.$('#addDate').val());
			var newEvent = {
				date: m,
				time: this.$('#addTime').val(),
				venue: this.$('#addVenue').val(),
				location: this.$('#addAddress').val()
			};
			this.get('controller').send('saveNewEvent', newEvent);
			this.$('#addEvent').slideToggle();
		}
	}
});