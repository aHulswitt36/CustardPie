using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CustardPieDal
{
    public interface IBaseRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> Get(int id);

        Task<int> Delete(int id);
        Task<int> Insert(T entity);
        Task<int> Update(T entity);
    }
}