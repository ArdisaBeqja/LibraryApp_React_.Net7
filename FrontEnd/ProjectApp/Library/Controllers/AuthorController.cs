// using Microsoft.AspNetCore.Mvc;
// using System.Data;
// using MySql.Data.MySqlClient;
// namespace Library
// {
//     [ApiController]
//     [Route("[controller]")]
//     public class AuthorController : ControllerBase
//     {
//         public static Proxy database = new Proxy();

//         [HttpGet("authors")]
//         public ActionResult<Author[]> Get()
//         {
//             database.OpenConnection();

//             List<Author> authors = new List<Author>();

//             using (var command = database.connection.CreateCommand())
//             {
//                 command.CommandText = "SELECT * FROM author";

//                 using (var reader = command.ExecuteReader())
//                 {
//                     while (reader.Read())
//                     {
//                         Author author = new Author
//                         {
//                             name = reader.GetString("name"),
//                             bio = reader.GetString("bio"),
//                             nrOfBooks = reader.GetInt32("nrOfBooks"),
//                             createdAt = reader.GetDateTime("createdAt"),
//                             createdBy = reader.GetString("createdBy")
//                         };

//                         authors.Add(author);
//                     }
//                 }
//             }

//             database.CloseConnection();

//             if (authors.Count == 0)
//             {
//                 return NotFound();
//             }

//             return Ok(authors);
//         }

         
//           [HttpPost("authors")]
//         public ActionResult SaveAuthor(Author inputModel)
//         {
//             try
//             {
//                 database.OpenConnection();

//               using (var command = database.connection.CreateCommand())
// {
//     command.CommandText = "INSERT INTO author (name, bio, nrOfBooks, createdat, createdby) " +
//                           "VALUES (@name, @bio, @nrOfBooks, @createdat, @createdby)";
//     command.Parameters.AddWithValue("@name", inputModel.name);
//     command.Parameters.AddWithValue("@bio", inputModel.bio);
//     command.Parameters.AddWithValue("@nrOfBooks", 0); // Set a default value for nrOfBooks
//     command.Parameters.AddWithValue("@createdat", DateTime.Now); // Set a default value for createdat
//     command.Parameters.AddWithValue("@createdby", "admin2"); // Set a default value for createdby
//     command.ExecuteNonQuery();
// }


//                 return Ok();
//             }
//             catch (Exception ex)
//             {
//                 // Handle any exceptions that occur during the database operation
//                 return BadRequest("Error: " + ex.Message);
//             }
//             finally
//             {
//                 database.CloseConnection();
//             }
//         }
        
        

// [HttpPut("authors/{name}")]

// public ActionResult UpdateAuthor(string name, [FromBody] Author inputModel)
// {
//     try
//     {
//         database.OpenConnection();

//         using (var command = database.connection.CreateCommand())
//         {
//             command.CommandText = "UPDATE author SET bio = @bio WHERE name = @name";
//             command.Parameters.AddWithValue("@bio", inputModel.bio);
//             command.Parameters.AddWithValue("@name", name);
//             command.ExecuteNonQuery();
//         }

//         database.CloseConnection();

//         return Ok();
//     }
//     catch (Exception ex)
//     {
//         // Handle any exceptions that occur during the database operation
//         Console.WriteLine("Error: " + ex.Message);
//         return StatusCode(500, "An error occurred while updating the author.");
//     }
// }


       
      
       



//         }
    
//     }
