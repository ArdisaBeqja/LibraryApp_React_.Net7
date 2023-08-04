using Microsoft.EntityFrameworkCore;

namespace LibaryApp.Models
{
    public class CategoryContex:DbContext
    {
        public CategoryContex(DbContextOptions<CategoryContex>options):base(options)
        {
            
        }
        public DbSet<Category>Categories { get; set; }
    }
}
