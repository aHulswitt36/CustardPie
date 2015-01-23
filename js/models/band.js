CustardPie.Band = DS.Model.extend({
  bandName: DS.attr('string'),
  songs: DS.hasMany('song', {async: true})
});

// CustardPie.Band.FIXTURES = [
//   {
//     id: 1,
//     name: 'Aerosmith',
//     songs: [1,2,3,4,5]
//   },
//   {
//     id: 2,
//     name: 'America',
//     songs: [6,7]
//   },
//   {
//     id: 3,
//     name: 'Argent',
//     songs: [8]
//   },
//   {
//     id: 4,
//     name: 'Artful Dodger',
//     songs: [9]
//   },
//   {
//     id: 5,
//     name: 'Bad Company',
//     songs: [10,11,12,13]
//   },
//   {
//     id: 6,
//     name: 'Black Sabbath',
//     songs: [14,15,16,17,18,19,20]
//   },
//   {
//     id: 7,
//     name: 'Blackfoot',
//     songs: [21]
//   },
//   {
//     id: 8,
//     name: 'Beatles',
//     songs: [22,23,24,25,26,27,28,29,30]
//   },
//   {
//     id: 9,
//     name: 'Bon Jovi',
//     songs: [31,32,33,34]
//   },
//   {
//     id: 11,
//     name: 'Candle Box',
//     songs: [36]
//   },
//   {
//     id: 13,
//     name: 'Creedance Clearwater Revival',
//     songs: [39,40,41,42]
//   },
//   {
//     id: 14,
//     name: 'Deep Purple',
//     songs: [43,44,45,46]
//   },
//   {
//     id: 15,
//     name: 'Doors',
//     songs: [47,48,49,50]
//   },
//   {
//     id: 16,
//     name: 'Eagles',
//     songs: [51,52,53,54,55]
//   },
//   {
//     id: 17,
//     name: 'Electric Light Orchestra (ELO)',
//     songs: [56]
//   },
//   {
//     id: 18,
//     name: 'Foghat',
//     songs: [57,58]
//   },
//   {
//     id: 19,
//     name: 'Georgia Sattelites',
//     songs: [59]
//   },
//   {
//     id: 20,
//     name: 'Alex Harvey',
//     songs: [60,61]
//   },
//
//   {
//     id: 22,
//     name: 'Honeymoon Suite',
//     songs: [65]
//   },
//   {
//     id: 21,
//     name: 'Jimi Hendrix',
//     songs: [62,63,64]
//   },
//   {
//     id: 23,
//     name: 'Billy Idol',
//     songs: [66]
//   },
//   {
//     id: 10,
//     name: 'Jackson Brown',
//     songs: [35]
//   },
//   {
//     id: 24,
//     name: 'KISS',
//     songs: [67,68]
//   },
//   {
//     id: 25,
//     name: 'Led Zeppelin',
//     songs: [69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]
//   },
//   {
//     id: 26,
//     name: 'John Lennon',
//     songs: [89]
//   },
//   {
//     id: 27,
//     name: 'Loverboy',
//     songs: [90,91]
//   },
//   {
//     id: 29,
//     name: 'Motley Crue',
//     songs: [97]
//   },
//   {
//     id: 34,
//     name: 'Night Ranger',
//     songs: [110]
//   },
//   {
//     id: 31,
//     name: 'Ozzy Osbourne',
//     songs: [99,100,101]
//   },
//   {
//     id: 28,
//     name: 'Paul McCartney',
//     songs: [92,93,94,95,96]
//   },
//   {
//     id: 36,
//     name: 'Rainbow',
//     songs: [117,118]
//   },
//   {
//     id: 37,
//     name: 'REO Speedwagon',
//     songs: [119,120]
//   },
//   {
//     id: 38,
//     name: 'Rolling Stones',
//     songs: [121,122,123]
//   },
//   {
//     id: 39,
//     name: 'Rush',
//     songs: [124,125]
//   },
//   {
//     id: 43,
//     name: 'Stories',
//     songs: [130]
//   },
//   {
//     id: 44,
//     name: 'STYX',
//     songs: [131,132,133]
//   },
//   {
//     id: 30,
//     name: 'Ted Nugent',
//     songs: [98]
//   },
//   {
//     id: 12,
//     name: 'The Cars',
//     songs: [37,38]
//   },
//   {
//     id: 32,
//     name: 'Tom Petty',
//     songs: [102,103,104,105,106]
//   },
//   {
//     id: 33,
//     name: 'Metallica',
//     songs: [107,108,109]
//   },
//   {
//     id: 35,
//     name: 'Pink Floyd',
//     songs: [111,112,113,114,115,116]
//   },
//   {
//     id: 40,
//     name: 'Todd Rundgren',
//     songs: [126]
//   },
//   {
//     id: 41,
//     name: 'Bob Segar',
//     songs: [127,128]
//   },
//   {
//     id: 42,
//     name: 'Ringo Starr',
//     songs: [129]
//   },
//   {
//     id: 45,
//     name: 'Billy Squire',
//     songs: [134]
//   },
//   {
//     id: 46,
//     name: 'Train',
//     songs: [135]
//   },
//   {
//     id: 47,
//     name: 'Trooper',
//     songs: [136]
//   },
//   {
//     id: 48,
//     name: 'Van Halen',
//     songs: [137,138,139,140,141,142]
//   },
//   {
//     id: 49,
//     name: 'Joe Walsh',
//     songs: [143,144,145]
//   },
//   {
//     id: 50,
//     name: 'The Who',
//     songs: [146]
//   },
//   {
//     id: 51,
//     name: 'Gary Wright',
//     songs: [147,148]
//   },
//   {
//     id: 52,
//     name: 'Neil Young',
//     songs: [149,150,151,152,153]
//   },
//   {
//     id: 53,
//     name: 'ZZ Top',
//     songs: [154,155,156]
//   }
// ];
