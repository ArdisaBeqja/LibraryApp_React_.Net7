using LibaryApp.Models;
using LibraryApp.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<AuthorContex>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));


builder.Services.AddDbContext<AdminContex>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));


builder.Services.AddDbContext<BookContex>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));

builder.Services.AddDbContext<NotesContex>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));

builder.Services.AddDbContext<CategoryContex>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));

builder.Services.AddCors();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1",
        new() { Title = "api", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Author/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();


builder.Services.AddCors();
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Author}/{action=Index}/{id?}");

app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint(
    "/swagger/v1/swagger.json",
    "v1"
    ));
app.Run();
