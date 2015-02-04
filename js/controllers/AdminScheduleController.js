CustardPie.AdminScheduleController = Ember.ArrayController.extend({
	sortProperties: ['date'],
	sortAscending: true ,
	isDirty: false,
	numRows: 100,
	columns: Ember.computed(function() {
		var columnNames, columns, dateColumn, timeColumn, removeColumn;
		columnNames = ['venue', 'location'];
		dateColumn = Ember.Table.ColumnDefinition.create({
			columnWidth: '8%',
			headerCellName: 'Date',
			isSortable: true,
			tableCellViewClass: 'CustardPie.DatePickerTableCell',
			getCellContent: function(row) {
				var date = row.get('date');
				var formattedDate = moment(date).format("MM/DD/YYYY");
				return formattedDate;
			},
			setCellContent: function(row, value) {
				var date = new Date(moment(value)._i);
				row.set('date', date);
				row.save();
				//save to model
				return row.set('date', date);
			}
		});
		timeColumn = Ember.Table.ColumnDefinition.create({
			columnWidth: '5%',
			headerCellName: 'Time',
			tableCellViewClass: 'CustardPie.TimePickerTableCell',
			contentPath: 'time',
			setCellContent: function (row, value) {
				//save to model
				row.set('time', value);
				row.save();
				return row.set('time', value);
			}
		});
		removeColumn = Ember.Table.ColumnDefinition.create({
			columnWidth: '6%',
			headerCellName: 'Actions',
			tableCellViewClass: 'CustardPie.RemoveActionTableCell',
			setCellContent: function(row, value){
				row.deleteRecord();
				row.save();
			}
		});
	  columns = columnNames.map(function(key, index) {
	    var name;
	    name = key.charAt(0).toUpperCase() + key.slice(1);
	    return Ember.Table.ColumnDefinition.create({
	      columnWidth: '28%',
	      maxWidth: 20,
	      headerCellName: name,
	      tableCellViewClass: 'CustardPie.EditableTableCell',
	      contentPath: key
	    });
	  });
	  columns.push(removeColumn);
		columns.unshift(timeColumn);
	  columns.unshift(dateColumn);
    return columns;
	}).property(),
	sortedContent: Ember.computed.sort('content.@each.date', function(a, b){
	   	var ap = moment(Ember.get(a, 'date')),
	       	bp = moment(Ember.get(b, 'date'))

	    if(ap !== bp) {
	      return ap - bp;
	    }
  	}),
	formatDate: function(date){
			var parts = date.split('/');
			return new Date(parts[0], parts[1]-1, parts[2]);
	},
	actions: {
		saveNewEvent: function(model){
			var newDate = model.date;
			var newTime = model.time;
			var newVenue = model.venue;
			var newAddress = model.location;
			var newEvent = this.store.createRecord('schedule', {
				date: new Date(newDate._i),
				time: newTime,
				venue: newVenue,
				location: newAddress
			});

			newEvent.save();
			this.set('newDate', '');
			this.set('newTime', '');
			this.set('newVenue', '');
			this.set('newAddress', '');
		}
	}
});
