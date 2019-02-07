using System.Collections.Generic;
using System.Threading.Tasks;
using CustardPieDal.Models;

namespace CustardPieDal{
    public interface IScheduleDal{
        Task<IEnumerable<Schedule>> GetSchedules();
        Task<Schedule> GetSchedule(int id);

        Task<int> DeleteSchedule(int id);
        Task<int> InsertSchedule(Schedule schedule);
        Task<int> UpdateSchedule(Schedule schedule);
    }
}