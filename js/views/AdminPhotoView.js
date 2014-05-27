CustardPie.AdminPhotoView = Ember.View.extend({
  classNames: ['droppable'],
  ImagePreview: Ember.View.extend({
    tagName: 'img',
    attributeBindings: ['src'],
    src: null,
    image: null,
    didInsertElement: function() {
      var reader = new FileReader(),
          image = this.get('image');
      
      if(!image.type.match(/^image\//i)){
        this.destroy();
        return;
      }
      
      reader.onload = function(event){
        if(this.get('isDestroyed') === true){
          return;
        }
        
        this.set('src', event.target.result);
      }.bind(this);
      
      reader.readAsDataURL(image);
    }
  }),
  fileField: Ember.View.extend({
    tagName: 'input',
    classNames: 'files',
    type: 'file',
    attributeBindings: ['type'],
    change: function(e){
      var files = this.get('element').files;
      var controller = this.get('parentView').get('controller');
      for(var i = 0, numFiles = files.length; i < numFiles; i++){
        if(!files.hasOwnProperty(i)&&(!(i in files))){
          continue;
        }
        
        var file = files[i];
            
        controller.send('addFile', file);
      }
      return true;
    }
  })
});