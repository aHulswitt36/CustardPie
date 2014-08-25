CustardPie.Song = DS.Model.extend({
  title: DS.attr('string'),
  band: DS.belongsTo('band')
});

CustardPie.Song.FIXTURES = [
  {
    id: 1,
    title: 'Jaded',
    band: 1
  },
  {
    id: 2,
    title: 'Lord of the Thighs',
    band: 1
  },
  {
    id: 3,
    title: 'One Way Street',
    band: 1
  },
  {
    id: 4,
    title: 'Same Old Song & Dance',
    band: 1
  },
  {
    id: 5,
    title: 'Sweet Emotion',
    band: 1
  },
  {
    id: 6,
    title: 'Tinman',
    band: 2
  },
  {
    id: 7,
    title: 'Ventura Highway',
    band: 2
  },
  {
    id: 8,
    title: 'Hold Your Head Up',
    band: 3
  },
  {
    id: 9,
    title: 'Scream',
    band: 4
  },
  {
    id: 10,
    title: "Can't Get Enough",
    band: 5
  },
  {
    id: 11,
    title: 'Moving On',
    band: 5
  },
  {
    id: 12,
    title: 'Rock Steady',
    band: 5
  },
  {
    id: 13,
    title: 'Silver, Blue & Gold',
    band: 5
  },
  {
    id: 14,
    title: 'Electric Funeral',
    band: 6
  },
  {
    id: 15,
    title: 'Fairies Wear Boots',
    band: 6
  },
  {
    id: 16,
    title: 'Ironman',
    band: 6
  },
  {
    id: 17,
    title: 'N.I.B.',
    band: 6
  },
  {
    id: 18,
    title: 'Paranoid',
    band: 6
  },
  {
    id: 19,
    title: 'Sweet Leaf',
    band: 6
  },
  {
    id: 20,
    title: 'War Pigs',
    band: 6
  },
  {
    id: 21,
    title: 'Train, Train',
    band: 7
  },
  {
    id: 22,
    title: 'A Day in a Life',
    band: 8
  },
  {
    id: 23,
    title: 'Come Together',
    band: 8
  },
  {
    id: 24,
    title: 'Got to Get You Into My Life',
    band: 8
  },
  {
    id: 25,
    title: 'Hello Goodbye',
    band: 8
  },
  {
    id: 26,
    title: 'Here Comes the Sun',
    band: 8
  },
  {
    id: 27,
    title: 'I Am the Walrus',
    band: 8
  },
  {
    id: 28,
    title: 'Revolution',
    band: 8
  },
  {
    id: 29,
    title: 'Something',
    band: 8
  },
  {
    id: 30,
    title: 'While My Guitar',
    band: 8
  },
  {
    id: 31,
    title: 'Bad Name',
    band: 9
  },
  {
    id: 32,
    title: "Livin' On A Prayer",
    band: 9
  },
  {
    id: 33,
    title: "It's My Life",
    band: 9
  },
  {
    id: 34,
    title: 'Runaway',
    band: 9
  },
  {
    id: 35,
    title: 'Doctor My Eyes',
    band: 9
  },
  {
    id: 36,
    title: 'Far Behind',
    band: 9
  },
  {
    id: 37,
    title: 'Bye Bye Love',
    band: 9
  },
  {
    id: 38,
    title: 'Living In Stereo',
    band: 9
  },
  {
    id: 39,
    title: 'Born on the Bayou',
    band: 9
  },
  {
    id: 40,
    title: 'Green River',
    band: 9
  },
  {
    id: 41,
    title: 'Have You Ever Seen the Rain?',
    band: 9
  },
  {
    id: 42,
    title: 'Suzie Q',
    band: 9
  },
  {
    id: 43,
    title: 'Hush',
    band: 9
  },
  {
    id: 44,
    title: 'Lazy',
    band: 9
  },
  {
    id: 45,
    title: 'Perfect Strangers',
    band: 9
  },
  {
    id: 46,
    title: 'Smoke on the Water',
    band: 9
  },
  {
    id: 47,
    title: 'L.A. Woman',
    band: 9
  },
  {
    id: 48,
    title: 'Love Her Madly',
    band: 9
  },
  {
    id: 49,
    title: 'Love Me Two Times',
    band: 9
  },
  {
    id: 50,
    title: 'Roadhouse Blues',
    band: 9
  },
  {
    id: 51,
    title: 'In the City',
    band: 9
  },
  {
    id: 52,
    title: 'One of These Nights',
    band: 9
  },
  {
    id: 53,
    title: 'Those Shoes',
    band: 9
  },
  {
    id: 54,
    title: 'Victim of Love',
    band: 9
  },
  {
    id: 55,
    title: 'Witchy Woman',
    band: 9
  },
  {
    id: 56,
    title: 'Evil Woman',
    band: 9
  },
  {
    id: 57,
    title: 'Fool for the City',
    band: 9
  },
  {
    id: 58,
    title: 'Slow Ride',
    band: 9
  },
  {
    id: 59,
    title: 'Keep Your Hands to Yourself',
    band: 9
  },
  {
    id: 60,
    title: 'Faithhealer',
    band: 9
  },
  {
    id: 61,
    title: 'Midnight Moses',
    band: 9
  },
  {
    id: 62,
    title: 'All Along the Watch Tower',
    band: 9
  },
  {
    id: 63,
    title: 'Purple Haze',
    band: 9
  },
  {
    id: 64,
    title: 'Voodoo Child',
    band: 9
  },
  {
    id: 65,
    title: 'New Girl',
    band: 9
  },
  {
    id: 66,
    title: 'Rebel Yell',
    band: 9
  },
  {
    id: 67,
    title: 'Hard Luck Woman',
    band: 9
  },
  {
    id: 68,
    title: 'New York Groove',
    band: 9
  },
  {
    id: 69,
    title: 'Black Country Woman',
    band: 9
  },
  {
    id: 70,
    title: 'Bring it on Home',
    band: 9
  },
  {
    id: 71,
    title: 'Custard Pie',
    band: 9
  },
  {
    id: 72,
    title: "Dancin' Days",
    band: 9
  },
  {
    id: 73,
    title: 'Heartbreaker',
    band: 9
  },
  {
    id: 74,
    title: 'Hey Hey What Can I Do',
    band: 9
  },
  {
    id: 75,
    title: 'House of the Holy',
    band: 9
  },
  {
    id: 76,
    title: 'Immigrant Song',
    band: 9
  },
  {
    id: 77,
    title: 'Kashmir',
    band: 9
  },
  {
    id: 78,
    title: 'Misty Mountain Top',
    band: 9
  },
  {
    id: 79,
    title: "Nobody's  Fault But Mine",
    band: 9
  },
  {
    id: 80,
    title: 'No Quarter',
    band: 9
  },
  {
    id: 81,
    title: 'Over the Hills and Far Away',
    band: 9
  },
  {
    id: 82,
    title: 'Rock and Roll',
    band: 9
  },
  {
    id: 83,
    title: "Since I've Been Loving You",
    band: 9
  },
  {
    id: 84,
    title: 'Stairway to Heaven',
    band: 9
  },
  {
    id: 85,
    title: 'Ten Years Gone',
    band: 9
  },
  {
    id: 86,
    title: 'The Lemon Song',
    band: 9
  },
  {
    id: 87,
    title: 'Trampled Under Foot',
    band: 9
  },
  {
    id: 88,
    title: 'When the Levee Breaks',
    band: 9
  },
  {
    id: 89,
    title: 'Imagine',
    band: 9
  },
  {
    id: 90,
    title: 'Turn Me Loose',
    band: 9
  },
  {
    id: 91,
    title: 'Working for the Weekend',
    band: 9
  },
  {
    id: 92,
    title: 'Band on the Run',
    band: 9
  },
  {
    id: 93,
    title: 'Jet',
    band: 9
  },
  {
    id: 94,
    title: 'Let Me Roll It',
    band: 9
  },
  {
    id: 95,
    title: 'Live & Let Die',
    band: 9
  },
  {
    id: 96,
    title: "Maybe I'm Amazed",
    band: 9
  },
  {
    id: 97,
    title: 'Home Sweet Home',
    band: 9
  },
  {
    id: 98,
    title: 'Strangle Hold',
    band: 9
  },
  {
    id: 99,
    title: 'Crazy Train',
    band: 9
  },
  {
    id: 100,
    title: 'Mr. Crowley',
    band: 9
  },
  {
    id: 101,
    title: 'Shot in the Dark',
    band: 9
  },
  {
    id: 102,
    title: 'American Girl',
    band: 9
  },
  {
    id: 103,
    title: 'Last Dance With Mary Jane',
    band: 9
  },
  {
    id: 104,
    title: 'Refugee',
    band: 9
  },
  {
    id: 105,
    title: 'Running Down a Dream',
    band: 9
  },
  {
    id: 106,
    title: 'You Got Lucky',
    band: 9
  },
  {
    id: 107,
    title: 'Enter Sandman',
    band: 9
  },
  {
    id:108,
    title: 'Until It Sleeps',
    band: 9
  },
  {
    id: 109,
    title: 'Whiskey in a Jar',
    band: 9
  },
  {
    id: 110,
    title: "Don't Tell Me You Love Me",
    band: 9
  },
  {
    id: 111,
    title: 'Money',
    band: 9
  },
  {
    id: 112,
    title: 'One of These Days',
    band: 9
  },
  {
    id: 113,
    title: 'Pigs (Three Different Kinds)',
    band: 9
  },
  {
    id: 114,
    title: 'Shine on You Crazy Diamond',
    band: 9
  },
  {
    id: 115,
    title: 'Time',
    band: 9
  },
  {
    id: 116,
    title: 'Us & Them',
    band: 9
  },
  {
    id: 117,
    title: 'Stone Cold',
    band: 9
  },
  {
    id: 118,
    title: 'Street of Dreams',
    band: 9
  },
  {
    id: 119,
    title: 'Riding the Storm Out',
    band: 9
  },
  {
    id: 120,
    title: 'Roll with the Changes',
    band: 9
  },
  {
    id: 121,
    title: 'Brown Sugar',
    band: 9
  },
  {
    id: 122,
    title: 'Heartbreaker',
    band: 9
  },
  {
    id: 123,
    title: 'Honky Tonk Woman',
    band: 9
  },
  {
    id: 124,
    title: 'Tom Sawyer',
    band: 9
  },
  {
    id: 125,
    title: 'Working Man',
    band: 9
  },
  {
    id:126,
    title: 'I Saw the Light',
    band: 9
  },
  {
    id: 127,
    title: 'Sunspot Baby',
    band: 9
  },
  {
    id: 128,
    title: "Ramblin' Gamblin' Man",
    band: 9
  },
  {
    id: 129,
    title: "It Don't Come Easy",
    band: 9
  },
  {
    id: 130,
    title: 'Brother Louie',
    band: 9
  },
  {
    id: 131,
    title: 'Blue Collar Man',
    band: 9
  },
  {
    id: 132,
    title: 'Lady',
    band: 9
  },
  {
    id: 133,
    title: 'Renegade',
    band: 9
  },
  {
    id: 134,
    title: 'In the Dark',
    band: 9
  },
  {
    id: 135,
    title: 'Drops of Jupitar',
    band: 9
  },
  {
    id: 136,
    title: 'Raise a Little Hell',
    band: 9
  },
  {
    id:137,
    title: "Ain't Talking 'Bout Love",
    band: 9
  },
  {
    id: 138,
    title: 'Dance the Night Away',
    band: 9
  },
  {
    id: 139,
    title: 'Eruption',
    band: 9
  },
  {
    id: 140,
    title: "I'll Wait",
    band: 9
  },
  {
    id: 141,
    title: 'Panama',
    band: 9
  },
  {
    id: 142,
    title: 'You Really Got Me',
    band: 9
  },
  {
    id: 143,
    title: 'Funk 49',
    band: 9
  },
  {
    id: 144,
    title: 'Rocky Mountain Way',
    band: 9
  },
  {
    id: 145,
    title: 'Turn to Stone',
    band: 9
  },
  {
    id: 146,
    title: "Baba-O'Riley",
    band: 9
  },
  {
    id: 147,
    title: 'Dream Weaver',
    band: 9
  },
  {
    id: 148,
    title: 'Love Is Alive',
    band: 9
  },
  {
    id: 149,
    title: 'Heart of Gold',
    band: 9
  },
  {
    id: 150,
    title: 'Like a Hurricane',
    band: 9
  },
  {
    id: 151,
    title: 'Ohio',
    band: 9
  },
  {
    id: 152,
    title: 'Old Man',
    band: 9
  },
  {
    id: 153,
    title: 'Powder Finger',
    band: 9
  },
  {
    id: 154,
    title: 'Jesus Just Left',
    band: 9
  },
  {
    id: 155,
    title: 'Tush',
    band: 9
  },
  {
    id: 156,
    title: 'Waiting for the Bus',
    band: 9
  },
];