using Nunu_Electronics_BackEND.Repositories.Interfaces;

namespace Nunu_Electronics_BackEND.Infrastructure.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<T> Repository<T>() where T : class;
        Task SaveChangesAsync();
    }
}
