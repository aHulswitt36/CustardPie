window.CustardPie = Ember.Application.create();


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

Ember.Handlebars.helper('formatScheduleDate', function(date){
		var d_names = new Array("Sun", "Mon", "Tues",
			"Wed", "Thur", "Fri", "Sat");

		var m_names = new Array("January", "February", "March", 
			"April", "May", "June", "July", "August", "September", 
			"October", "November", "December");
		var eventDate = moment(date);
		return eventDate.format("dddd MMMM Do YYYY,");
		// var day = eventDate.getDay();
		// var currentDate = eventDate.getDate();
		// var month = eventDate.getMonth();
		// var year = eventDate.getFullYear();
		// var result = d_names[day] + " " + m_names[month] + " " + currentDate + " " + year + ", ";
		// return result;
	}
);

// This is a temp model for playlist
var playlist = [
	{
		letter: "A",
		bands: [
			{
				bandName: 'Aerosmith',
				songs: [
					{"title": "Jaded"},
					{"title": "Lord of the Thighs"},
					{"title": "One Way Street"},
					{"title": "Same Old Song & Dance"},
					{"title": "Sweet Emotion"}
				]
			},
			{
				bandName: 'America',
				songs: [
					{"title": "Tinman"},
					{"title": "Ventura Highway"}
				]
			},
			{
				bandName: 'Argent',
				songs: [
					{"title": "Hold Your Head Up"}
				]
			},
			{
				bandName: 'Artful Dodger',
				songs: [
					{"title": "Scream"}
				]
			}
		]
	},
	{
		letter: "B",
		bands:[
			{
				bandName: 'Bad Company',
				songs: [
					{"title": "Can't Get Enough"},
					{"title": "Moving On"},
					{"title": "Rock Steady"},
					{"title": "Silver, Blue & Gold"}
				]
			},
			{
				bandName: 'Black Sabbath',
				songs: [
					{"title": "Electric Funeral"},
					{"title": "Fairies Wear Boots"},
					{"title": "Ironman"},
					{"title": "N.I.B."},
					{"title": "Paranoid"},
					{"title": "Sweet Leaf"},
					{"title": "War Pigs"}
				]
			},
			{
				bandName: 'Blackfoot',
				songs: [
					{"title": "Train, Train"}
				]
			},
			{
				bandName: 'Beatles',
				songs: [
					{"title": "A Day in a Life"},
					{"title": "Come Together"},
					{"title": "Got To Get You Into My Life"},
					{"title": "Hello Goodbye"},
					{"title": "Here Comes the Sun"},
					{"title": "I Am the Walrus"},
					{"title": "Revolution"},
					{"title": "Something"},
					{"title": "While My Guitar"}
				]
			},
			{
				bandName: 'Bon Jovi',
				songs: [
					{"title": "Bad Name"},
					{"title": "Livin' On A Prayer"},
					{"title": "It's My Life"},
					{"title": "Runaway"}
				]
			}
		]
	}	
]

//this is a temp model for photos

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
		return this.store.find('playlist');
	}
})

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

(function(){
	//Editable Table Cells
	CustardPie.ScheduleTableEditableCell = Ember.Table.TableCell.extend({
		//className: 'editable-table-cell',
		templateName: 'editableScheduleCell',
		isEditing: false,
		type: 'text',
		innerTextField: Ember.TextField.extend({
			typeBinding: 'parentView.type',
			valueBinding: 'parentView.cellContent',
			didInsertElement: function() {
			  return this.$().focus();
			},
			focusOut: function(event) {
			  return this.set('parentView.isEditing', false);
			}
		}),
		onRowContentDidChange: Ember.observer(function() {
			return this.set('isEditing', false);
    	}, 'rowContent'),
		click: function(event) {
			this.set('isEditing', true);
			return event.stopPropagation();
		}
	});

	CustardPie.DatePickerTableCell = Ember.Table.TableCell.extend({
		templateName: 'editableDateCell',
		isEditing: false,
		type: 'date',
		innerTextField: Ember.TextField.extend({
			_picker: null,
			modelChangedValue: function(){
				var picker = this.get('_picker');
				if(picker){
					picker.datepicker("setDate", this.get("value"));
				}
				this.set('parentView.isEditing', false);
			}.observes("value"),
			valueBinding: 'parentView.cellContent',
			didInsertElement: function(){
				this.set('_picker', this.$().datepicker());
				return this.$().focus();
			}
			// willDestroyElement: function(){
			// 	picker = this.get('_picker');

			// }
		}),
		onRowContentDidChange: Ember.observer(function() {
			return this.set('isEditing', false);
	    }, 'rowContent'),
		click: function(event) {
			this.set('isEditing', true);
			return event.stopPropagation();
		}
	});

	CustardPie.TimePickerTableCell = Ember.Table.TableCell.extend({
		templateName: 'editableTimeCell',
		isEditing: false,
		type: 'text',
		innerTextField: Ember.TextField.extend({
			_picker: null,
			modelChangedValue: function(){
			    var picker = this.get("_picker");
			    if (picker){
			      	picker.timepicker('setTime', this.get("value"));
			    }
				this.set('parentView.isEditing', false);
		  	}.observes("value"),
			valueBinding: 'parentView.cellContent',
			didInsertElement: function() {
				this.set('_picker', this.$().timepicker({
					'minTime': '6:00pm',
					'maxTime': '1:00am',
					'timeFormat': 'g:i a'
				}));
				
			  	return this.$().focus();
			}
		}),
		onRowContentDidChange: Ember.observer(function() {
			return this.set('isEditing', false);
	    }, 'rowContent'),
		click: function(event) {
			this.set('isEditing', true);
			return event.stopPropagation();
		}
	});
}).call(this);
