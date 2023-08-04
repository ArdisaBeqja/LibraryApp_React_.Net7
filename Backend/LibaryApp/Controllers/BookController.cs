using LibaryApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibaryApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookContex _bookContex;

        public BookController(BookContex bookContex)
        {
            _bookContex = bookContex;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            var books = await _bookContex.Books.ToListAsync();
            if (books == null) { return NotFound(); }
            return books;
        }

        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            _bookContex.Books.Add(book);
            await _bookContex.SaveChangesAsync();
            return CreatedAtAction(nameof(GetBooks), new { id = book.Id }, book);
        }

        [HttpGet("{author}")]
        public async Task<ActionResult<List<Book>>> GetAuthors(string author)
        {
            var books = await _bookContex.Books.Where(b => b.Author == author).ToListAsync();
            if (books == null || books.Count == 0)
            {
                return NotFound();
            }

            return books;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBook(int id)
        {
            if (_bookContex.Books == null)
            {
                return NotFound();
            }
            var book = await _bookContex.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            _bookContex.Books.Remove(book);
            await _bookContex.SaveChangesAsync();
            return Ok();
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> PutAuthor(int id, Book book)
        {
            if (id != book.Id) { return BadRequest(); }
            _bookContex.Entry(book).State = EntityState.Modified;
            try
            {
                await _bookContex.SaveChangesAsync();

            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }




        [HttpGet("{Title}")]
        public async Task<ActionResult<bool>> CheckTitleExists(string Title)
        {
            var titleExists = await _bookContex.Books.AnyAsync(a => a.Title == Title);
            return Ok(titleExists);
        }

    }



}
