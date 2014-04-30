CustardPie.RemoveActionTableCell = Ember.Table.TableCell.extend({
		templateName: 'removeCell',
		click: function(event){
			this.get('column').setCellContent(this.get('rowContent', 0));
		}
});