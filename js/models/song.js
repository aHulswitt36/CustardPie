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
  
];