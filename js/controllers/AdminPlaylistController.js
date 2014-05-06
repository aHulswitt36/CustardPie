CustardPie.AdminPlaylistController = Ember.ArrayController.extend({
  sortProperties: ['name'],
	sortAscending: true ,
  columns: Ember.computed(function() {
		var columnNames, columns, removeColumn, songsColumn;
		columnNames = ['band'];
    songsColumn = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Songs',
	    tableCellViewClass: 'CustardPie.SongsCell',
      contentPath: 'id',
	    setCellContent: function(row, value) {
	      	
	    }

    });
		removeColumn = Ember.Table.ColumnDefinition.create({
			columnWidth: 40,
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
	      columnWidth: $(window).width() / 4,
	      headerCellName: name,
	      tableCellViewClass: 'CustardPie.EditableTableCell',
	      contentPath: 'name',
	      setCellContent: function(row, value) {
	      	row.set(key, value);
	      	row.save();
	        	return row.set(key,value);
	      }
	    });
	  });
    columns.push(songsColumn);
	  columns.push(removeColumn);
		return columns;
	}).property()
  
});

