CustardPie.Schedule = DS.Model.extend({
	date: DS.attr('date'),
	time: DS.attr('string'),
	venue: DS.attr('string'),
	location: DS.attr('string')
});

// This is a temp model for schedule 
CustardPie.Schedule.FIXTURES = [
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
		time: '8:00 pm',
		venue: 'Willowick Restaurant and Lounge',
		location: '30609 Euclid Ave. Willowick, OH 44095'
	},
	{
		id: '6',
		date: new Date(moment('9/27/2014')._i),
		time: '9:00 pm',
		venue: 'Wing Warehouse',
		location: '10223 Northfield Rd, Northfield, OH 44067'
	},
	{
		id: '7',
		date: new Date(moment('10/4/2014')._i),
		//time: '8:00 pm',
		venue: 'Private Party',
		location: 'Parma'
	},
	{
		id: '8',
		date: new Date(moment('10/18/2014')._i),
		time: '9:00 pm',
		venue: "Tripp's Bar & Grill",
		location: '1100 W Royalton Rd, Broadview Hts., OH 44147'
	},
	{
		id: '9',
		date: new Date(moment('10/25/2014')._i),
		time: '9:00 pm',
		venue: "Mad Mike's Halloween Party",
		location: '5045 Turney Rd, Cleveland, OH 44125'
	},
	{
		id: '10',
		date: new Date(moment('11/1/2014')._i),
		time: '8:00 pm',
		venue: 'The Bedford Eagles (Penny Lane)',
		location: '237 Broadway Ave. Bedford, OH 44146'
	},
	{
		id: '11',
		date: new Date(moment('11/8/2014')._i),
		time: '9:00 pm',
		venue: 'Union House Bar & Restaurant',
		location: '2713 Brookpark Rd, Cleveland, OH 44134'
	},
	{
		id: '12',
		date: new Date(moment('11/26/2014')._i),
		time: '9:00 pm',
		venue: 'Wing Warehouse',
		location: '10223 Northfield Rd, Northfield, OH 44067'
	},
	{
		id: '13',
		date: new Date(moment('12/13/2014')._i),
		time: '9:00 pm',
		venue: "Tripp's Bar & Grill",
		location: '1100 W Royalton Rd, Broadview Hts., OH 44147'
	},
];