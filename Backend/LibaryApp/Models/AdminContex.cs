
using Microsoft.EntityFrameworkCore;

namespace LibaryApp.Models
{
    public class AdminContex: DbContext
    {
        public AdminContex()
        {
            
        }
        public AdminContex(DbContextOptions<AdminContex> options):base (options)
        { 
        }

        public DbSet<Admin> Admins { get; set; }
    }
}
