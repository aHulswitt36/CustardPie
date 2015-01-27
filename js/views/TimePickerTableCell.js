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
					'minTime': '7:00pm',
					'maxTime': '1:00am',
					'timeFormat': 'g:i a'
				}));

			  	return this.$().focus();
			},
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
