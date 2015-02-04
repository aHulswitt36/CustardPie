CustardPie.Band = DS.Model.extend({
  bandName: DS.attr('string'),
  songs: DS.hasMany('song', {async: true})
});

CustardPie.Band.FIXTURES = [
  {
    id: 1,
    bandName: 'Aerosmith',
    songs: [1,2,3,4,5]
  },
  {
    id: 2,
    bandName: 'America',
    songs: [6,7]
  },
  {
    id: 3,
    bandName: 'Argent',
    songs: [8]
  },
  {
    id: 4,
    bandName: 'Artful Dodger',
    songs: [9]
  },
  {
    id: 5,
    bandName: 'Bad Company',
    songs: [10,11,12,13]
  },
  {
    id: 6,
    bandName: 'Black Sabbath',
    songs: [14,15,16,17,18,19,20]
  },
  {
    id: 7,
    bandName: 'Blackfoot',
    songs: [21]
  },
  {
    id: 8,
    bandName: 'Beatles',
    songs: [22,23,24,25,26,27,28,29,30]
  },
  {
    id: 9,
    bandName: 'Bon Jovi',
    songs: [31,32,33,34]
  },
  {
    id: 11,
    bandName: 'Candle Box',
    songs: [36]
  },
  {
    id: 13,
    bandName: 'Creedance Clearwater Revival',
    songs: [39,40,41,42]
  },
  {
    id: 14,
    bandName: 'Deep Purple',
    songs: [43,44,45,46]
  },
  {
    id: 15,
    bandName: 'Doors',
    songs: [47,48,49,50]
  },
  {
    id: 16,
    bandName: 'Eagles',
    songs: [51,52,53,54,55]
  },
  {
    id: 17,
    bandName: 'Electric Light Orchestra (ELO)',
    songs: [56]
  },
  {
    id: 18,
    bandName: 'Foghat',
    songs: [57,58]
  },
  {
    id: 19,
    bandName: 'Georgia Sattelites',
    songs: [59]
  },
  {
    id: 20,
    bandName: 'Alex Harvey',
    songs: [60,61]
  },

  {
    id: 22,
    bandName: 'Honeymoon Suite',
    songs: [65]
  },
  {
    id: 21,
    bandName: 'Jimi Hendrix',
    songs: [62,63,64]
  },
  {
    id: 23,
    bandName: 'Billy Idol',
    songs: [66]
  },
  {
    id: 10,
    bandName: 'Jackson Brown',
    songs: [35]
  },
  {
    id: 24,
    bandName: 'KISS',
    songs: [67,68]
  },
  {
    id: 25,
    bandName: 'Led Zeppelin',
    songs: [69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]
  },
  {
    id: 26,
    bandName: 'John Lennon',
    songs: [89]
  },
  {
    id: 27,
    bandName: 'Loverboy',
    songs: [90,91]
  },
  {
    id: 29,
    bandName: 'Motley Crue',
    songs: [97]
  },
  {
    id: 34,
    bandName: 'Night Ranger',
    songs: [110]
  },
  {
    id: 31,
    bandName: 'Ozzy Osbourne',
    songs: [99,100,101]
  },
  {
    id: 28,
    bandName: 'Paul McCartney',
    songs: [92,93,94,95,96]
  },
  {
    id: 36,
    bandName: 'Rainbow',
    songs: [117,118]
  },
  {
    id: 37,
    bandName: 'REO Speedwagon',
    songs: [119,120]
  },
  {
    id: 38,
    bandName: 'Rolling Stones',
    songs: [121,122,123]
  },
  {
    id: 39,
    bandName: 'Rush',
    songs: [124,125]
  },
  {
    id: 43,
    bandName: 'Stories',
    songs: [130]
  },
  {
    id: 44,
    bandName: 'STYX',
    songs: [131,132,133]
  },
  {
    id: 30,
    bandName: 'Ted Nugent',
    songs: [98]
  },
  {
    id: 12,
    bandName: 'The Cars',
    songs: [37,38]
  },
  {
    id: 32,
    bandName: 'Tom Petty',
    songs: [102,103,104,105,106]
  },
  {
    id: 33,
    bandName: 'Metallica',
    songs: [107,108,109]
  },
  {
    id: 35,
    bandName: 'Pink Floyd',
    songs: [111,112,113,114,115,116]
  },
  {
    id: 40,
    bandName: 'Todd Rundgren',
    songs: [126]
  },
  {
    id: 41,
    bandName: 'Bob Segar',
    songs: [127,128]
  },
  {
    id: 42,
    bandName: 'Ringo Starr',
    songs: [129]
  },
  {
    id: 45,
    bandName: 'Billy Squire',
    songs: [134]
  },
  {
    id: 46,
    bandName: 'Train',
    songs: [135]
  },
  {
    id: 47,
    bandName: 'Trooper',
    songs: [136]
  },
  {
    id: 48,
    bandName: 'Van Halen',
    songs: [137,138,139,140,141,142]
  },
  {
    id: 49,
    bandName: 'Joe Walsh',
    songs: [143,144,145]
  },
  {
    id: 50,
    bandName: 'The Who',
    songs: [146]
  },
  {
    id: 51,
    bandName: 'Gary Wright',
    songs: [147,148]
  },
  {
    id: 52,
    bandName: 'Neil Young',
    songs: [149,150,151,152,153]
  },
  {
    id: 53,
    bandName: 'ZZ Top',
    songs: [154,155,156]
  }
];
