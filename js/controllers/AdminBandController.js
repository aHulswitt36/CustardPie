CustardPie.AdminBandController = Ember.ObjectController.extend({
  columns: Ember.computed(function() {
		var columnNames, columns, removeColumn;
		columnNames = ['song'];
		removeColumn = Ember.Table.ColumnDefinition.create({
			columnWidth: 40,
			tableCellViewClass: 'CustardPie.RemoveActionTableCell',
			setCellContent: function(row, value){
        var band = row.get('band');
        band.get('songs').removeObject(row);
        band.save();
				row.deleteRecord();
				row.save();
			}
		});
	  columns = columnNames.map(function(key, index) {
	    var name;
	    name = key.charAt(0).toUpperCase() + key.slice(1);
	    return Ember.Table.ColumnDefinition.create({
	      columnWidth: 407,
	      headerCellName: name,
	      tableCellViewClass: 'CustardPie.EditableTableCell',
	      contentPath: 'title',
	      setCellContent: function(row, value) {
          row.set('title', value);
	      	row.save();
	        return row.set('title',value);
	      }
	    });
	  });
	  columns.push(removeColumn);
		return columns;
	}).property(),
  actions: {
    saveNewSong: function(model){
      var title = model.title;
      var band = this.get('content');

      var newSong = this.get('store').createRecord('song', {
        title: title,
        _band: band
      });

      newSong.save().then(function(song){
        var songBand = song.get('_band');
        songBand.get('songs').pushObject(newSong);
        songBand.save();
      });

      this.set('newTitle', '');
    }
  }
});
