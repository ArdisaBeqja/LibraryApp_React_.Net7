namespace LibaryApp.Models
{
    public class Category
    {
        public int Id { get; set; }

        public string? categoryName { get; set; }
        public int priority { get; set; }
        public DateTime createdAt { get; set; }
        public string? createdBy { get; set; }

        public bool ispremium { get; set; }
        

    }
}
