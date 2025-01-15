using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using QuizAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<QuizDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

var app = builder.Build();

app.UseCors(options => options.WithOrigins("http://localhost:3000")
.AllowAnyMethod()    // Allows any HTTP method (e.g., GET, POST, PUT, DELETE, etc.)
.AllowAnyHeader());  // Allows any HTTP headers in the requests from the specified origin.

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    //app.UseSwaggerUI();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MyAPI");
        c.InjectStylesheet("/swagger-ui/SwaggerDark.css");
    });
    app.MapGet("/swagger-ui/SwaggerDark.css", async (CancellationToken cancellationToken) =>
    {
        var css = await File.ReadAllBytesAsync("SwaggerDark.css", cancellationToken);
        return Results.File(css, "text/css");
    }).ExcludeFromDescription();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
