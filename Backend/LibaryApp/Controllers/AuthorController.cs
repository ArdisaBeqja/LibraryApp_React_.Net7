using LibaryApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibaryApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly AuthorContex _authorContex;
        public AuthorController(AuthorContex authorContex)
        {
            _authorContex = authorContex;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Author>>> GetAuthors()
        {
            if (_authorContex.Authors == null)
            {
                return NoContent();
            }
            return await _authorContex.Authors.ToListAsync();


        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Author>> GetAuthors(int id)
        {
            if (_authorContex.Authors == null)
            {
                return NoContent();
            }
            var author = await _authorContex.Authors.FindAsync(id);
            if (author == null)
            {
                return NotFound();
            }

            return author;


        }
        [HttpPost]
        public async Task<ActionResult<Author>> PostAuthor(Author author)
        {
            _authorContex.Authors.Add(author);
            await _authorContex.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAuthors), new { id = author.Id }, author);
        }



        [HttpPut("{id}")]
        public async Task<ActionResult> PutAuthor(int id, Author author)
        {
            if (id != author.Id) { return BadRequest(); }
            _authorContex.Entry(author).State = EntityState.Modified;
            try
            {
                await _authorContex.SaveChangesAsync();

            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
    }


        [HttpDelete("{id}")]
        public async Task<ActionResult>DeleteAuthor(int id)
        {
            if (_authorContex.Authors == null)
            {
                return NotFound();
            }
            var author = await _authorContex.Authors.FindAsync(id);
            if (author == null)
            {
                return NotFound();
            }
            _authorContex.Authors.Remove(author);
            await _authorContex.SaveChangesAsync();
            return  Ok();
        }
    }
}