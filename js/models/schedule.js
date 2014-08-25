CustardPie.Schedule = DS.Model.extend({
	date: DS.attr('date'),
	time: DS.attr('string'),
	venue: DS.attr('string'),
	location: DS.attr('string')
});

// This is a temp model for schedule 
CustardPie.Schedule.FIXTURES = [
	{
		id: '3',
		date: new Date(moment('8/23/2014')._i),
		time: '8:00 pm',
		venue: "Quaker Steak & Lube",
		location: '5935 Canal Rd, Valley View, OH 44125'
	},
	{
		id: '4',
		date: new Date(moment('9/6/2014')._i),
		time: '9:00 pm',
		venue: "Manzo's Sports & Spirits",
		location: '64 Pearl Rd. Brunswick, OH 44212'
	},
	{
		id: '5',
		date: new Date(moment('9/13/2014')._i),
		time: '9:00 pm',
		venue: 'Willowick Restaurant and Lounge',
		location: '30609 Euclid Ave. Willowick, OH 44095'
	}
	
];