CustardPie.SongsCell = Ember.Table.TableCell.extend({
  templateName: 'songsCell',
  bandId: Ember.computed(function(){
    var column, row, _ref;
    _ref = this.getProperties('column', 'row'),
    column = _ref.column,
    row = _ref.row;
    if(!(column && row)){
      return 0;
    }
    return this.get('cellContent');
  }).property('column', 'row', 'cellContent')
});