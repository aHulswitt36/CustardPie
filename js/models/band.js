CustardPie.Band = DS.Model.extend({
  name: DS.attr('string'),
  songs: DS.hasMany('song', {async: true})
});

CustardPie.Band.FIXTURES = [
  {
    id: 1, 
    name: 'Aerosmith',
    songs: [1,2,3,4,5]
  },
  {
    id: 2, 
    name: 'America',
    songs: [6,7]
  },
  {
    id: 3, 
    name: 'Argent',
    songs: [8]
  },
  {
    id: 4, 
    name: 'Artful Dodger',
    songs: [9]
  },
  {
    id: 5, 
    name: 'Bad Company',
    songs: [10,11,12,13]
  },
  {
    id: 6, 
    name: 'Black Sabbath',
    songs: [14,15,16,17,18,19,20]
  },
  {
    id: 7, 
    name: 'Blackfoot',
    songs: [21]
  },
  {
    id: 8, 
    name: 'Beatles',
    songs: [22,23,24,25,26,27,28,29,30]
  },
  {
    id: 9, 
    name: 'Bon Jovi',
    songs: [31,32,33,34]
  }
];