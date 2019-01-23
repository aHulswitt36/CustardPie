import DS from 'ember-data';

var Schedule = DS.Model.extend({
  date: DS.attr('date'),
  time: DS.attr('string'),
  venue: DS.attr('string'),
  location: DS.attr('string')
});

Schedule.reopenClass({
  FIXTURES: [{
      id: '1',
      date: '12/3/2016',
      time: '9:00 pm',
      venue: "Union House Bar & Restaurant",
      location: '2713 Brookpark Rd, Cleveland, OH 44134'
    }, {
      id: '2',
      date: '12/30/2016',
      time: '9:00 pm',
      venue: "Wing Warehouse",
      location: '10223 Northfield Rd, Northfield, OH 44067'
    }, {
      id: '3',
      date: '1/7/2017',
      time: '9:00 pm',
      venue: "Flyers Bar & Grill",
      location: '6298 Pearl Rd, Parma Heights, OH 44130'
    }, {
      id: '4',
      date: '1/14/2017',
      time: '9:00 pm',
      venue: "Private Party",
      location: 'Hinckley, OH'
    }, {
      id: '5',
      date: '1/23/2017',
      time: '9:00 pm',
      venue: "Wing Warehouse",
      location: '10223 Northfield Rd, Northfield, OH 44067'
    }, {
      id: '6',
      date: '2/4/2017',
      time: '8:00 pm',
      venue: "Gears And Cheers",
      location: '23333 Aurora Rd, Bedford Heights, OH 44146'
    }, {
      id: '7',
      date: '2/11/2017',
      time: '9:00 pm',
      venue: "Wild Eagle Saloon",
      location: '921 Huron Rd E, Cleveland, OH 44115'
    }, {
      id: '8',
      date: '2/18/2017',
      time: '9:00 pm',
      venue: "Union House Bar & Restaurant",
      location: '2713 Brookpark Rd, Cleveland, OH 44134'
    }, {
      id: '9',
      date: '3/18/2017',
      time: '9:00 pm',
      venue: "Wing Warehouse",
      location: '10223 Northfield Rd, Northfield, OH 44067'
    }, {
      id: '10',
      date: '4/1/2017',
      time: '9:00 pm',
      venue: "Union House Bar & Restaurant",
      location: '2713 Brookpark Rd, Cleveland, OH 44134'
    }, {
      id: '11',
      date: '4/22/2017',
      time: '9:00 pm',
      venue: "Wing Warehouse",
      location: '10223 Northfield Rd, Northfield, OH 44067'
    }, {
      id: '12',
      date: '5/6/2017',
      time: '8:00 pm',
      venue: "Whiskey Island",
      location: '2800 Whiskey Is, Cleveland, OH 44102'
    }, {
      id: '13',
      date: '6/3/2017',
      time: '8:00 pm',
      venue: "Quaker Steak And Lube",
      location: '5935 Canal Rd, Valley View, OH 44125'
    }, {
      id: '14',
      date: '6/16/2017',
      time: '9:00 pm',
      venue: "Gears And Cheers",
      location: '23333 Aurora Rd, Bedford Heights, OH 44146'
    }, {
      id: '15',
      date: '6/23/2017',
      time: '9:00 pm',
      venue: "Smokin Joe Gets Married",
      location: ''
    }, {
      id: '16',
      date: '7/3/2017',
      time: '8:00 pm',
      venue: "Whiskey Island",
      location: '2800 Whiskey Is, Cleveland, OH 44102'
    }, {
      id: '17',
      date: '7/15/2017',
      time: '7:45 pm',
      venue: "St. Charles Carnival",
      location: '5891 Ridge Rd, Cleveland, OH 44129'
    }, {
      id: '18',
      date: '8/5/2017',
      time: '9:00 pm',
      venue: "Wing Warehouse",
      location: '10223 Northfield Rd, Northfield, OH 44067'
    }, {
      id: '19',
      date: '8/12/2017',
      time: '9:00 pm',
      venue: "Bike Fest",
      location: ''
    }, {
      id: '20',
      date: '8/26/2017',
      time: '8:00 pm',
      venue: "Quaker Steak and Lube",
      location: ''
    }, {
      id: '21',
      date: '5/20/2017',
      time: '9:00 pm',
      venue: "Wing Warehouse",
      location: '10223 Northfield Rd, Northfield, OH 44067'
    }, {
      id: '22',
      date: '6/10/2017',
      time: '9:00 pm',
      venue: "Camp Runamuck",
      location: ''
    }, {
      id: '23',
      date: '7/22/2017',
      time: '5:30 pm',
      venue: "Warren Ampitheatre",
      location: '321 Mahoning Ave, Warren, OH 44483'
    }, {
      id: '24',
      date: '7/29/2017',
      time: '8:30 pm',
      venue: "Willard Beach Party",
      location: ''
    }, {
      id: '25',
      date: '8/22/2017',
      time: '8:00 pm',
      venue: "Southeast Gears & Cheers",
      location: '23333 Aurora Rd, Bedford Heights, OH 44146'
    }, {
      id: '26',
      date: '9/3/2017',
      time: '12:00 pm',
      venue: "Whiskey Island",
      location: '2800 Whiskey Is, Cleveland, OH 44102'
    }, {
      id: '27',
      date: '9/16/2017',
      time: '9:00 pm',
      venue: "Union House Bar & Restaurant",
      location: '2713 Brookpark Rd, Cleveland, OH 44134'
    }, {
      id: '28',
      date: '9/23/2017',
      time: '9:00 pm',
      venue: "Johnny Malloy's Irish Sports Pub",
      location: '1038 N Court St, Medina, OH 44256'
    }, {
      id: '29',
      date: '9/30/2017',
      time: '9:00 pm',
      venue: "Wing Warehouse",
      location: '10223 Northfield Rd, Northfield, OH 44067'
    }, {
      id: '30',
      date: '10/7/2017',
      time: '9:00 pm',
      venue: "Flyers Bar & Grill",
      location: '6298 Pearl Rd, Parma Heights, OH 44130'
    }
  ]
  });

export default Schedule;
