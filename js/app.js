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

CustardPie.PhotoMixin = Ember.Mixin.create({
  mimeTypes: ['image/jpeg', 'image/jpg', 'image/gif', 'image/png', 'text/plain'],
  extensions: ['jpeg', 'jpg', 'gif', 'png'],
  files: [], 
  init: function () {
    this.set('files', []);
    this._super();
  },
  actions: {
    addFile: function(file){
      this.get('files').pushObject(file);
    }
  }  
});