CustardPie.Schedule = DS.Model.extend({
	date: DS.attr('date'),
	time: DS.attr('string'),
	venue: DS.attr('string'),
	location: DS.attr('string')
});

// This is a temp model for schedule 
CustardPie.Schedule.FIXTURES = [
	{
		id: '1',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Willowick Restaurant and Lounge',
		location: '30609 Euclid Ave. Willowick, OH 44065'
	},
	{
		id: '2',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Parma Tavern',
		location: '5680 Broadview Rd., Cleveland, OH 44134'
	},
	{
		id: '3',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Murphey&#apos;s Ale House',
		location: '7503 Granger Rd, Valley View, OH 44125'
	},
	{
		id: '4',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Quaker State and Lube',
		location: '5935 Canal Rd, Valley View, OH 44125'
	},
	{
		id: '5',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Wing Warehouse Northfield',
		location: '10223 Northfield Rd, Northfield, OH 44067'
	},
	{
		id: '6',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Scoundrel&#apos;s Bar &#amp; Grill',
		location: '826 Front St, Berea, OH 44017'
	},
	{
		id: '7',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Union House Restaurant and Bar',
		location: '2713 Brookpark Rd, Cleveland, OH 44134'
	},
	{
		id: '8',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Manzo&#apos;s Bar and Grill',
		location: '65 Pearl Rd, Brunswick, OH 44212'
	},
	{
		id: '9',
		date: new Date(),
		time: '9:00 pm',
		venue: 'Mad Mike&#apos;s Bar &#amp; Grill',
		location: '5045 Turney Rd, Garfield Hts, OH 44125'
	}
];