namespace LibaryApp.Models
{
    public class Author
    {
        public int Id { get; set; }
        public string? name { get; set; }
        public string? bio { get; set; }
        public DateTime createdAt { get; set; }
        public int nrOfBooks { get; set; }
        public string? createdBy { get; set; }
    }
}
