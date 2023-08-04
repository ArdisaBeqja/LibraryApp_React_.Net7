namespace LibaryApp.Models
{
    public class Book
    {
        public int Id { get; set; }

        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Author { get; set; }
        public string? Category { get; set;}

        public string? Store { get; set; }
    }
}
