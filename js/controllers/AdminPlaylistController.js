CustardPie.AdminPlaylistController = Ember.ArrayController.extend({
  content: [],
  sortProperties: ['bandName'],
	sortAscending: true ,
  columns: Ember.computed(function() {
		var columnNames, columns, removeColumn, songsColumn;
		columnNames = ['band'];
    songsColumn = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Songs',
	    tableCellViewClass: 'CustardPie.SongsCell',
      contentPath: 'id'
    });
		removeColumn = Ember.Table.ColumnDefinition.create({
			columnWidth: 40,
			tableCellViewClass: 'CustardPie.RemoveActionTableCell',
			setCellContent: function(row, value){
        var songs = row.get('songs').toArray();
        songs.forEach(function(song){
          song.deleteRecord();
          songs.removeObject(song);
          song.save();
        });
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
	      contentPath: 'bandName',
	      setCellContent: function(row, value) {
	      	row.set('bandName', value);
	      	row.save();
	        return row.set('bandName',value);
	      }
	    });
	  });
    columns.push(songsColumn);
	  columns.push(removeColumn);
		return columns;
	}).property(),
   actions: {
    saveNewBand: function(model){
      var name = model.name;

      var newBand = this.store.createRecord('band', {
        bandName: name
      });

      newBand.save();
      this.set('newName', '');
    }
  }
});
