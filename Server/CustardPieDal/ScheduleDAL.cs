using System;
using System.Collections.Generic;
using CustardPieDal.Models;

namespace CustardPieDal
{
    public class ScheduleDAL : IScheduleDal
    {
        public int DeleteSchedule(int id)
        {
            return 1;
        }

        public int InsertSchedule(Schedule schedule){
            return 1;
        }

        public Schedule GetSchedule(int id)
        {
            return new Schedule()
            {
                Id = 1,
                Venue = "Wing Warehouse", 
                Location = "1111 Broadview Rd. Northfield, Ohio 44129", 
                Date = new DateTime(2018, 7, 20, 9, 0, 0, DateTimeKind.Local)
            };
        }

        IEnumerable<Schedule> IScheduleDal.GetSchedules()
        {
            var events = new List<Schedule>();
            events.Add(new Schedule()
            {
                Id = 1,
                Venue = "Parma Tavern", 
                Location = "1111 Broadview Rd. Parma, Ohio 44129", 
                Date = new DateTime(2018, 5, 20, 9, 0, 0, DateTimeKind.Local)
            });
            return events;
        }

        public int UpdateSchedule(Schedule schedule)
        {
            return 1;
        }
    }
}
