CustardPie.DatePickerTableCell = Ember.Table.TableCell.extend({
		templateName: 'editableDateCell',
		isEditing: false,
		type: 'date',
		innerTextField: Ember.TextField.extend({
			_picker: null,
			modelChangedValue: function(){
				var picker = this.get('_picker');
				var date = moment(this.get('value'));
				if(picker && date.isValid()){
					picker.setDate(date.format("L"));
				}
				this.set('parentView.isEditing', false);
			}.observes("value"),
			valueBinding: 'parentView.cellContent',
			didInsertElement: function(){
				var picker = new Pikaday({
					field: this.$()[0],
					format: "MM/DD/YYYY"
				});
				this.set('_picker', picker);
				return this.$().focus();
			},			willDistroyElement: function(){				var picker = this.get('_picker');				if(picker){					picker.destory();				}				this.set('_picker', null);			},    	focusOut: function(event) {
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
