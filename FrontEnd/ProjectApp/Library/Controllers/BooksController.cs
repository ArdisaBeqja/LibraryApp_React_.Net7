// using Microsoft.AspNetCore.Mvc;

// namespace Library
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class BookController : ControllerBase
//     {
//         // Controller actions and logic go here
//         [HttpGet("books")]
// public ActionResult<Book[]> Get()
// {
//     Book[] books = new Book[]
//     {
//         new Book
//         {
//             id = "1",
//             title = "Book 1",
//             description = "Description 1",
//             imagePath = "path/to/image1.jpg",
//             createdAt = DateTime.Now,
//             createdBy = "Creator 1",
//             author = new Author
//             {
//                 name = "Author 1",
//                 bio = "Author bio 1",
//                 nrOfBooks = 10,
//                 createdBy = "Author Creator 1"
//             },
//             categories = new string[] { "Category 1", "Category 2" }
//         },
//         new Book
//         {
//             id = "2",
//             title = "Book 2",
//             description = "Description 2",
//             imagePath = "path/to/image2.jpg",
//             createdAt = DateTime.Now,
//             createdBy = "Creator 2",
//             author = new Author
//             {
//                 name = "Author 2",
//                 bio = "Author bio 2",
//                 nrOfBooks = 5,
//                 createdBy = "Author Creator 2"
//             },
//             categories = new string[] { "Category 3", "Category 4" }
//         }
//     };

//     if (books.Length == 0)
//     {
//         return NotFound();
//     }

//     return Ok(books);
// }

// }

// }