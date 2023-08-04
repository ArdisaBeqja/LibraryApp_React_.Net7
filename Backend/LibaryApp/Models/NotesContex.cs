using LibaryApp.Models;
using Microsoft.EntityFrameworkCore;

namespace LibraryApp.Models
{
    public class NotesContex : DbContext
    {
        public NotesContex()
        {
            // Empty constructor
        }

        public NotesContex(DbContextOptions<NotesContex> options) : base(options)
        {
            // Constructor that takes DbContextOptions as a parameter
        }

        public DbSet<Notes> Notess { get; set; }
    }
}
