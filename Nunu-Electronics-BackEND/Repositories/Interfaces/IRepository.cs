using System.Linq.Expressions;

namespace Nunu_Electronics_BackEND.Repositories.Interfaces
{
 
    
        public interface IRepository<T> where T : class
        {
            Task<T?> GetByIdAsync(int id, params Expression<Func<T, object>>[] includes);
            Task<IEnumerable<T>> GetAllAsync(params Expression<Func<T, object>>[] includes);
            Task AddAsync(T entity);
            void Update(T entity);
            void Delete(T entity);
            Task SaveChangesAsync();
        }
    }

