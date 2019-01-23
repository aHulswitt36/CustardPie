using System;

namespace CustardPieDal.Models
{
    public class Schedule
    {
        private string _venue;
        private int _id;
        private string _location;
        private DateTime _date;

        public int Id { get => _id; set => _id = value; }
        public string Venue { get => _venue; set => _venue = value; }
        public string Location { get => _location; set => _location = value; }
        public DateTime Date { get => _date; set => _date = value; }
        public string Time { get => _date.ToShortTimeString();}
    }
}