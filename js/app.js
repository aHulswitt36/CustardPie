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
/**
 * Have to do this to enable arrays of ids to be written in parent models
 * with 'hasMany" relationships
 */
