CustardPie.AdminPhotoController = Ember.Controller.extend({
  mimeTypes: ['image/jpeg', 'image/jpg', 'image/gif', 'image/png', 'text/plain'],
  extensions: ['jpeg', 'jpg', 'gif', 'png'],
  files: [], 
  actions:{
    addFile: function(file){
      var files = this.get('files');
      files.clear();
      files.pushObject(file);
    },
    savePic: function(){
      var file = this.get('files')[0];
      var reader = new FileReader();
      var src = "",
          name = "";
      
      reader.onload = function(event){
        src = event.target.result;
        name = file.name;
        var pic = this.store.createRecord('photo', {
          source: src,
          title: name
        });
        pic.save();
      }.bind(this);
      
      reader.readAsDataURL(file);
    }
  },
  validFiles: Ember.computed(function(){
    return this.get('files');
  }).property('files.length', 'files.@each.uploaded')
});

