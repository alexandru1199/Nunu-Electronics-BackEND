using Microsoft.EntityFrameworkCore;
using Nunu_Electronics_BackEND.Services.Interfaces;
using Nunu_Electronics_BackEND.Services;
using Nunu_Electronics_BackEND.UnitOfWork.Interfaces;
using Nunu_Electronics_BackEND.UnitOfWork;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("AzureSqlConnection")));

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IProductService, ProductService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting(); // Ensure routing is applied before CORS
app.UseCors("AllowAll"); // CORS must be applied before Authorization
app.UseAuthorization();
app.MapControllers();
app.Run();
