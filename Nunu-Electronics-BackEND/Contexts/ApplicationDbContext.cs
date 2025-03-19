using Microsoft.EntityFrameworkCore;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Entities.Login;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<User> Users { get; set;}
}
