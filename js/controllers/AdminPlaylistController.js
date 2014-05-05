CustardPie.AdminPlaylistController = Ember.ArrayController.extend({
  data: Ember.computed(function(){
    return this.content.get('content');
  }) 
});

Number.prototype.toCurrency = function() {
  var value;
  if (isNaN(this) || !isFinite(this)) {
    return '-';
  }
  value = Math.abs(this).toFixed(2);
  value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return (this < 0 ? '-$' : '$') + value;
};

Number.prototype.toPercent = function() {
  if (isNaN(this) || !isFinite(this)) {
    return '-';
  }
  return Math.abs(this * 100).toFixed(2) + '%';
};

CustardPie.TreeDataAdapter = Ember.Mixin.create({
  columns: Ember.computed(function(){
    var columns, data, names, groupingColumn;
    names = ['Songs'];
    groupingColumn = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Band',
      columnWidth: 500,//$(window).width() / 2,
      isTreeColumn: true,
      isSortable: false,
      textAlign: 'text-align-left',
      tableCellViewClass: 'CustardPie.BandCell',
      contentPath: 'name'
    });
    columns = names.map(function(key, index) {
      var name;
	    name = key.charAt(0).toUpperCase() + key.slice(1);
      return Ember.Table.ColumnDefinition.create({
        index: index,
        columnWidth: 500,//$(window).width() / 3,
        headerCellName: name,
        tableCellViewClass: 'CustardPie.SongCell',
        getCellContent: function(row) {
          //var songs;
         // songs = row.songs;
          return 5;
        }
      });
    });
    columns.unshift(groupingColumn);
    return columns;
  }).property(),
  
  root: Ember.computed(function(){
    var data;
    data = this.content;
    if(!data){
      return;
    }
    return this.createTree(null, data);
  }),
  rows: Ember.computed(function(){
    var maxGroupingLevel, root, rows;
    root = this.get('root');
    if(!root){
      return Ember.Array();
    }
    rows = this.flattenTree(null, root, Ember.A());
    this.computeStyles(null,root);
    maxGroupingLevel = Math.max.apply(rows.getEach('groupingLevel'));
    rows.forEach(function(row){
      return row.computeRowStyle(maxGroupingLevel);
    });
  }).property('root'),
  bodyContent: Ember.computed(function(){
    var rows;
    rows = this.get('rows');
    if(!rows){
      return Ember.A();
    }
    rows = rows.slice(1, rows.get('length'));
    return rows.filterProperty('isShowing');
  }).property('rows'),
  footerContent: Ember.computed(function(){
    var rows;
    rows = this.get('rows');
    if(!rows){
      return Ember.A();
    }
    return rows.slice(0,1);
  }).property('rows'),
  orderBy: function(item1, item2){
    var result, sortAscending, sortColumn, value1, value2;
    sortColumn = this.get('sortColumn');
    sortAscending = this.get('sortAscending');
    if(!sortColumn){
      return 1;
    }
    value1 = sortColumn.getCellContent(item1.get('content'));
    value2 = sortColumn.getCellContent(item2.get('content'));
    result = Ember.compare(value1, value2);
    if(sortAscending){
      return result;
    }else{
      return -result;
    }
  },
  createTree: function(parent, node){
    var children, row, 
      _this = this;
    row = CustardPie.PlaylistTableBandRow.create();
    children = (node.songs || []).map(function(child){
      return _this.createTree(row, child);
    });
    row.setProperties({
      isRoot: !parent,
      isLeaf: Ember.isEmpty(children),
      content: node,
      parent: parent,
      children: children,
      groupName: node.name,
      isCollapsed: false
    });
    return row;
  },
  flattenTree: function(parent, node, rows){
    var _this = this;
    rows.pushObject(node);
    (node.songs || []).forEach(function(child){
      return _this.flattenTree(node, child, rows);
    });
    return rows;
  },
  computeStyles: function(parent, node){
    var _this = this;
    node.computeStyles(parent);
    return node.get('songs').forEach(function(child){
      return _this.computeStyles(node, child);
    });
  }
});

CustardPie.TableComponent = Ember.Table.EmberTableComponent.extend(CustardPie.TreeDataAdapter, {
  numFixedColumns: 1,
  isCollapsed: false,
  isHeaderHeightResizable: true,
  rowHeight: 30,
  hasHeader: true,
  hasFooter: true,
  headerHeight: 70,
  sortAscending: false,
  sortColumn: null,
  selection: null,
  toggleTableCollapse: function(event){
    var children, isCollapsed;
    this.toggleProperty('isCollapsed');
    isCollapsed = this.get('isCollapsed');
    children = this.get('root.songs');
    if(!(children && children.get('length') > 0)) {
      return;
    }
    children.forEach(function(child){
      return child.recursiveCollapse(isCollapsed);
    });
    return this.notifyPropertyChange('rows');
  },
  toggleCollapse: function(event){
    row.toggleProperty('isCollapsed');
    return Ember.run.next(this, function(){
      return this.notifyPropertyChange('rows');
    });
  },
  sortByColumn: function(column){
    column.toggleProperty('sortAscending');
    this.set('sortColumn', column);
    return this.set('sortAscending', column.get('sortAscending'));
  }
});