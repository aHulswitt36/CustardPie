CustardPie.AdminPhotoController = Ember.Controller.extend({
  mimeTypes: ['image/jpeg', 'image/jpg', 'image/gif', 'image/png', 'text/plain'],
  extensions: ['jpeg', 'jpg', 'gif', 'png'],
  files: [], 
  actions:{
    addFile: function(file){
      var files = this.get('files');
      files.clear();
      files.pushObject(file);
    }
  },
  validFiles: Ember.computed(function(){
    return this.get('files');
  }).property('files.length', 'files.@each.uploaded')
});

