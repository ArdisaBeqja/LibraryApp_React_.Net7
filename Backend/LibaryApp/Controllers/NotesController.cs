using LibaryApp.Models;
using LibraryApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NotesContex _notesContext;

        public NotesController(NotesContex notesContext)
        {
            _notesContext = notesContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notes>>> GetNotess()
        {
            var notes = await _notesContext.Notess.ToListAsync();
            if (notes == null) { return NotFound(); }
            return notes;
        }

        [HttpPost]
        public async Task<ActionResult<Notes>> PostBook(Notes notes)
        {
            _notesContext.Notess.Add(notes);
            await _notesContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetNotess), new { id = notes.Id }, notes);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteNotes(int id)
        {
            if (_notesContext.Notess == null)
            {
                return NotFound();
            }
            var notes = await _notesContext.Notess.FindAsync(id);
            if (notes == null)
            {
                return NotFound();
            }
            _notesContext.Notess.Remove(notes);
            await _notesContext.SaveChangesAsync();
            return Ok();
        }


        [HttpPost ("special")]

        public async Task<ActionResult<Notes>>PostNotess(Notes notes)
        {
            if (notes == null) { return BadRequest("invalid"); }
            _notesContext.Notess.Add(notes);
            await _notesContext.SaveChangesAsync();
            return CreatedAtAction(nameof(PostNotess), new { id = notes.Id }, notes);

        }

        [HttpGet("sget")]
        public async Task<ActionResult<IEnumerable<Notes>>> GetNotesS()
        {
            if (_notesContext.Notess == null)
            {
                return NotFound();
            }
            return await _notesContext.Notess.Where(c => c.special == "yes").ToListAsync();
        }
}
}
