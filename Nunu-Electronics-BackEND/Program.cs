using Microsoft.Extensions.FileProviders;
using Microsoft.EntityFrameworkCore;
using Nunu_Electronics_BackEND.Services.Interfaces;
using Nunu_Electronics_BackEND.Services;
using Nunu_Electronics_BackEND.UnitOfWork.Interfaces;
using Nunu_Electronics_BackEND.UnitOfWork;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// Add controllers and Swagger for API
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Set up SQL Server connection
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("AzureSqlConnection")));

// Register dependencies
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IAuthService, AuthService>();

var app = builder.Build();

// Enable Swagger in development environment
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable routing and CORS
app.UseRouting();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

// Serve static files from `wwwroot` (general static files for the app)
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")),
    RequestPath = "/static" // Ex: http://localhost:5000/static/somefile.jpg
});

// Serve static files from `wwwroot/browser` (Angular generated files)
app.UseDefaultFiles(new DefaultFilesOptions
{
    DefaultFileNames = new List<string> { "index.html" },
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "browser"))
});
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
         Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "browser")),
    RequestPath = "" // Serve Angular files at the root (http://localhost:5000/index.html, etc.)
});

// Serve static files from `wwwroot/server` (Server-side files)
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "server")),
    RequestPath = "/server" // Ex: http://localhost:5000/server/yourfile.js
});

// Fix for Angular routing: redirect 404 to `index.html` for Angular client-side routing
app.Use(async (context, next) =>
{
    await next();
    if (context.Response.StatusCode == 404 &&
        !context.Request.Path.Value.StartsWith("/api") &&
        !Path.HasExtension(context.Request.Path.Value))
    {
        context.Request.Path = "/index.html";
        await next();
    }
});

app.Run();
