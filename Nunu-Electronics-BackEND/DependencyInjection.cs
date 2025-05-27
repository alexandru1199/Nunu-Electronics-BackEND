
using Nunu_Electronics_BackEND.Infrastructure;
using Nunu_Electronics_BackEND.Infrastructure.Interfaces;
using Nunu_Electronics_BackEND.Services;
using Nunu_Electronics_BackEND.Services.Interfaces;



namespace Nunu_Electronics_BackEND
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            // Adăugăm UnitOfWork corect
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            // Adăugăm celelalte servicii
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<ICouponService, CouponService>();
            services.AddScoped<ITagService, TagService>();

            return services;
        }
    }
}
