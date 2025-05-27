using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Nunu_Electronics_BackEND.Repositories.Interfaces;

public class Repository<T> : IRepository<T> where T : class
{
    private readonly DbContext _context;
    private readonly DbSet<T> _dbSet;

    public Repository(DbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public async Task<IEnumerable<T>> GetAllAsync(params Expression<Func<T, object>>[] includes)
    {
        IQueryable<T> query = _dbSet;

        foreach (var include in includes)
        {
            query = query.Include(include);
        }

        return await query.ToListAsync();
    }

    public async Task<T?> GetByIdAsync(int id, params Expression<Func<T, object>>[] includes)
    {
        IQueryable<T> query = _dbSet;

        foreach (var include in includes)
        {
            query = query.Include(include);
        }

        var entity = await _dbSet.FindAsync(id);

        // Dacă nu ai nevoie de includes în entitatea returnată, poți opri aici.
        if (entity != null || includes.Length == 0)
            return entity;

        // Dacă ai nevoie de includes, caută din nou cu .Where + Include
        return await query.FirstOrDefaultAsync(e => EF.Property<int>(e, "Id") == id);
    }


    public async Task AddAsync(T entity)
    {
        await _dbSet.AddAsync(entity);
    }

    public void Update(T entity)
    {
        _dbSet.Update(entity);
    }

    public void Delete(T entity)
    {
        _dbSet.Remove(entity);
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}
