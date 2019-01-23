using System.Collections.Generic;
using CustardPieDal.Models;

namespace CustardPieDal{
    public interface IScheduleDal{
        IEnumerable<Schedule> GetSchedules();
        Schedule GetSchedule(int id);

        int DeleteSchedule(int id);
        int InsertSchedule(Schedule schedule);
        int UpdateSchedule(Schedule schedule);
    }
}