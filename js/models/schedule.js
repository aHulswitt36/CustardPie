CustardPie.Schedule = DS.Model.extend({
	date: DS.attr('date'),
	time: DS.attr('string'),
	venue: DS.attr('string'),
	location: DS.attr('string')
});

//This is a temp model for schedule
CustardPie.Schedule.FIXTURES = [
	{
		id: '4',
		date: new Date(moment('3/14/2015')._i),
		time: '9:00 pm',
		venue: "The Union House Bar & Restaurant",
		location: '2713 Brookpark Rd. Cleveland, OH 44134'
	},
	{
		id: '5',
		date: new Date(moment('3/21/2015')._i),
		time: '9:00 pm',
		venue: "Larry's Tavern (Penny Lane - Beatles Tribute)",
		location: '9750 Olde Rt. 8 Northfield, OH 44067'
	},
	{
		id: '6',
		date: new Date(moment('3/28/2015')._i),
		time: '9:00 pm',
		venue: "Wing Warehouse",
		location: '10223 Northfield Rd. Northfield, OH 44067'
	},
	{
		id: '7',
		date: new Date(moment('4/11/2015')._i),
		time: '9:00 pm',
		venue: "Scoundrel's",
		location: '826 Front St. Berea, OH 44017'
	},
	{
		id: '8',
		date: new Date(moment('4/18/2015')._i),
		time: '9:00 pm',
		venue: "Happy Moose Bar and Grill",
		location: '9436 Ohio 14 Streetsboro, OH 44241'
	},
	{
		id: '9',
		date: new Date(moment('4/25/2015')._i),
		time: '9:00 pm',
		venue: "Wing Warehouse",
		location: '10223 Northfield Rd. Northfield, OH 44067'
	},
	{
		id: '10',
		date: new Date(moment('5/2/2015')._i),
		time: '9:00 pm',
		venue: "Manzo's Sports & Spirits",
		location: '65 Pearl Rd. Brunswick, OH 44212'
	},
	{
		id: '11',
		date: new Date(moment('5/16/2015')._i),
		time: '9:00 pm',
		venue: "The Union House Bar & Restaurant",
		location: '2713 Brookpark Rd. Cleveland, OH 44134'
	},
	{
		id: '12',
		date: new Date(moment('5/23/2015')._i),
		time: '9:00 pm',
		venue: "Woodside Lake Park",
		location: '2486 Frost Rd. Streetsboro, OH 44241'
	},
	{
		id: '13',
		date: new Date(moment('5/30/2015')._i),
		time: '9:00 pm',
		venue: "Wing Warehouse",
		location: '10223 Northfield Rd. Northfield, OH 44067'
	},
	{
		id: '14',
		date: new Date(moment('6/6/2015')._i),
		time: '8:00 pm',
		venue: "Whiskey Island & Wendy Park",
		location: '2800 Whiskey Island. Cleveland, OH'
	},
	{
		id: '15',
		date: new Date(moment('6/19/2015')._i),
		time: '7:00 pm',
		venue: "South East Gears & Cheers Restaurant and Bar",
		location: '23333 Aurora Rd. Bedford Hts, OH'
	},
	{
		id: '16',
		date: new Date(moment('6/20/2015')._i),
		time: '9:00 pm',
		venue: "Iron City Outdoor Amphitheatre (Iron City Cafe)",
		location: '4002 Jennings Rd. Cleveland, OH 44109'
	},
	{
		id: '17',
		date: new Date(moment('7/1/2015')._i),
		time: '7:00 pm',
		venue: "Quaker Steak & Lube (Bike Night)",
		location: '5935 Canal Rd. Valley View, OH 44125'
	},
	{
		id: '18',
		date: new Date(moment('7/11/2015')._i),
		time: '4:00 pm',
		venue: "Saint Charles Borromeo Carnival",
		location: '5891 Ridge Rd. Parma, OH 44129'
	},
	{
		id: '19',
		date: new Date(moment('7/18/2015')._i),
		time: '9:00 pm',
		venue: "Wing Warehouse",
		location: '10223 Northfield Rd. Northfield, OH 44067'
	},
	{
		id: '20',
		date: new Date(moment('8/13/2015')._i),
		time: '9:00 pm',
		venue: "East Shore Beach Club (Penny Lane-Beatles Tribute)",
		location: '17217 Dorchester Dr. Cleveland, OH 44119'
	},
	{
		id: '21',
		date: new Date(moment('9/19/2015')._i),
		time: '9:00 pm',
		venue: "Scoundrel's",
		location: '826 Front St. Berea, OH 44017'
	},
	{
		id: '22',
		date: new Date(moment('9/26/2015')._i),
		time: '9:00 pm',
		venue: "Wing Warehouse",
		location: '10223 Northfield Rd. Northfield, OH 44067'
	},
	{
		id: '23',
		date: new Date(moment('10/24/2015')._i),
		time: '9:00 pm',
		venue: "Wing Warehouse",
		location: '10223 Northfield Rd. Northfield, OH 44067'
	},
	{
		id: '24',
		date: new Date(moment('11/7/2015')._i),
		time: '9:00 pm',
		venue: "Scoundrel's",
		location: '826 Front St. Berea, OH 44017'
	},
	{
		id: '25',
		date: new Date(moment('11/23/2015')._i),
		time: '9:00 pm',
		venue: "Wing Warehouse (Thanksgiving Eve)",
		location: '10223 Northfield Rd. Northfield, OH 44067'
	},
	{
		id: '26',
		date: new Date(moment('12/26/2015')._i),
		time: '9:00 pm',
		venue: "Wing Warehouse",
		location: '10223 Northfield Rd. Northfield, OH 44067'
	}
];
