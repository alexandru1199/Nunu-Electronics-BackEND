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
    public DbSet<User> Users { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<Order> Orders { get; set; }  // Corectat denumirea la Orders (plural)
    public DbSet<OrderProduct> OrderProducts { get; set; }  // Adăugat pentru OrderProduct (legătura între ordine și produse)
    public DbSet<Coupon> Coupons { get; set; }
 
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
     .HasOne(p => p.Tag)
     .WithMany(t => t.Products)  // Dacă Tag-ul poate avea mai multe produse
     .HasForeignKey(p => p.TagID)  // Folosește TagID ca ForeignKey
     .OnDelete(DeleteBehavior.Restrict);  // Poți seta comportamentul de ștergere (optional)

        modelBuilder.Entity<Order>()
            .HasOne(o => o.User)
            .WithMany(u => u.Orders)
            .HasForeignKey(o => o.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        // Configurarea câmpului TotalPrice în Order
        modelBuilder.Entity<Order>()
            .Property(o => o.TotalPrice)
            .HasColumnType("decimal(18,2)");
        modelBuilder.Entity<OrderProduct>(entity =>
        {
            // Setarea cheii primare composite
            entity.HasKey(op => new { op.OrderId, op.ProductId });

            // Definirea relației cu tabelul Orders
            entity.HasOne(op => op.Order)
                .WithMany(o => o.OrderProducts)
                .HasForeignKey(op => op.OrderId)
                .OnDelete(DeleteBehavior.Cascade);

         
            // Configurarea coloanelor pentru OrderProduct
            entity.Property(op => op.ItemPrice)
                .IsRequired() // dacă prețul trebuie să fie obligatoriu
                .HasColumnType("decimal(18,2)") // tipul de date pentru preț
                .HasColumnName("Item_Price");

            entity.Property(op => op.Quantity)
                .IsRequired()
                .HasColumnName("Quantity");

            // Asigură-te că numele coloanei respectă convenția bazei tale de date
            entity.Property(op => op.OrderId)
                .HasColumnName("Order_ID"); // Dacă în baza de date este Order_ID

            entity.Property(op => op.ProductId)
                .HasColumnName("Product_ID"); // Dacă în baza de date este Product_ID
        });

    }
}
