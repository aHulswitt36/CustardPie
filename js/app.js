window.CustardPie = Ember.Application.create();

Ember.Handlebars.helper('formatScheduleDate', function(date){
		var d_names = new Array("Sun", "Mon", "Tues",
			"Wed", "Thur", "Fri", "Sat");

		var m_names = new Array("January", "February", "March", 
			"April", "May", "June", "July", "August", "September", 
			"October", "November", "December");
		var eventDate = moment(date);
		return eventDate.format("dddd MMMM Do YYYY,");
	}
);

//// This is a temp model for playlist
//var playlist = [
//	{
//		letter: "A",
//		bands: [
//			{
//				bandName: 'Aerosmith',
//				songs: [
//					{"title": "Jaded"},
//					{"title": "Lord of the Thighs"},
//					{"title": "One Way Street"},
//					{"title": "Same Old Song & Dance"},
//					{"title": "Sweet Emotion"}
//				]
//			},
//			{
//				bandName: 'America',
//				songs: [
//					{"title": "Tinman"},
//					{"title": "Ventura Highway"}
//				]
//			},
//			{
//				bandName: 'Argent',
//				songs: [
//					{"title": "Hold Your Head Up"}
//				]
//			},
//			{
//				bandName: 'Artful Dodger',
//				songs: [
//					{"title": "Scream"}
//				]
//			}
//		]
//	},
//	{
//		letter: "B",
//		bands:[
//			{
//				bandName: 'Bad Company',
//				songs: [
//					{"title": "Can't Get Enough"},
//					{"title": "Moving On"},
//					{"title": "Rock Steady"},
//					{"title": "Silver, Blue & Gold"}
//				]
//			},
//			{
//				bandName: 'Black Sabbath',
//				songs: [
//					{"title": "Electric Funeral"},
//					{"title": "Fairies Wear Boots"},
//					{"title": "Ironman"},
//					{"title": "N.I.B."},
//					{"title": "Paranoid"},
//					{"title": "Sweet Leaf"},
//					{"title": "War Pigs"}
//				]
//			},
//			{
//				bandName: 'Blackfoot',
//				songs: [
//					{"title": "Train, Train"}
//				]
//			},
//			{
//				bandName: 'Beatles',
//				songs: [
//					{"title": "A Day in a Life"},
//					{"title": "Come Together"},
//					{"title": "Got To Get You Into My Life"},
//					{"title": "Hello Goodbye"},
//					{"title": "Here Comes the Sun"},
//					{"title": "I Am the Walrus"},
//					{"title": "Revolution"},
//					{"title": "Something"},
//					{"title": "While My Guitar"}
//				]
//			},
//			{
//				bandName: 'Bon Jovi',
//				songs: [
//					{"title": "Bad Name"},
//					{"title": "Livin' On A Prayer"},
//					{"title": "It's My Life"},
//					{"title": "Runaway"}
//				]
//			}
//		]
//	}	
//]

CustardPie.ScheduleLazyDataSource = Ember.ArrayProxy.extend({
	store: null,
	foundRows: false,
	createScheduleRow: function(row, event){
		row.set('date', event.get('date'));
		row.set('time', event.get('time'));
		row.set('venue', event.get('venue'));
		row.set('location', event.get('location'));
	},
	requestRow: function(index){
		var content = this.get('content');
		var store = this.get('store');
		var self = this;

		if(content[index] && (content[index] === null)){
			return content[index];
		}

		if(store !== null){
			store.findAll('schedule').then(function(items){
				var length = item.get('length');
				self.set('numRows', length);
				items.forEach(function(item, index){
					var row = content[index];
					self.createScheduleRow(row, item);
				});
				return content[index];
			});
		}
	},
	objectAt: function(index){
		var content = this.get('content');
		var row = content[index];
		if(row && !row.get('error'))
			return row;
		this.requestRow(index);
		return content[index];
	}
});