using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CustardPieDal.Models;
using Microsoft.EntityFrameworkCore;

namespace CustardPieDal
{
    public class ScheduleDAL : IScheduleDal
    {
        private readonly CustardPieDbContext _context;

        public ScheduleDAL(CustardPieDbContext context){
            _context = context;
        } 

        public async Task<int> DeleteSchedule(int id)
        {
            var schedule = await _context.Schedule.AsNoTracking().SingleOrDefaultAsync(s => s.Id == id);
            _context.Schedule.Remove(schedule);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> InsertSchedule(Schedule schedule){
            var inserted = await _context.Schedule.AddAsync(schedule);
            return await _context.SaveChangesAsync();
        }

        public async Task<Schedule> GetSchedule(int id)
        {
            var schedule = await _context.Schedule.AsNoTracking().SingleOrDefaultAsync(s => s.Id == id);
            return schedule;
        }

        public async Task<IEnumerable<Schedule>> GetSchedules()
        {
            var events = _context.Schedule.AsNoTracking();

            return await events.ToListAsync();
        }
        
        public async Task<int> UpdateSchedule(Schedule schedule)
        {   
            var scheduleEvent = await _context.Schedule.AsNoTracking().SingleOrDefaultAsync(s => s.Id == schedule.Id);
            scheduleEvent.Date = schedule.Date;
            scheduleEvent.Location = schedule.Location;
            scheduleEvent.Venue = schedule.Venue;
            
            return await _context.SaveChangesAsync();;
        }
    }
}
