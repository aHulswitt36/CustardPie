//Editable Table Cells
CustardPie.EditableTableCell = Ember.Table.TableCell.extend({
  className: 'editableCell',
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