
using Microsoft.EntityFrameworkCore;

namespace LibaryApp.Models
{
    public class BookContex : DbContext
    {
        public BookContex()
        {

        }
        public BookContex(DbContextOptions<BookContex> options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}
