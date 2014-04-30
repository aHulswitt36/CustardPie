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
		}),
		onRowContentDidChange: Ember.observer(function() {
			return this.set('isEditing', false);
	    }, 'rowContent'),
		click: function(event) {
			this.set('isEditing', true);
			return event.stopPropagation();
		}
});