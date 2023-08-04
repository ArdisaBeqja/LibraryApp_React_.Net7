using Microsoft.EntityFrameworkCore;

namespace LibaryApp.Models
{
    public class AuthorContex:DbContext
    {
        public AuthorContex(DbContextOptions<AuthorContex>options):base (options)
        {
            
        }
        public DbSet<Author> Authors { get; set; }


     }
}
