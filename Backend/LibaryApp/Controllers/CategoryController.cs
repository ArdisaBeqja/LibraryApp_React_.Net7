using LibaryApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;

namespace LibaryApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly CategoryContex _categoryContex;
        public CategoryController(CategoryContex categoryContex)
        {
            _categoryContex = categoryContex;
        }



        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            if (_categoryContex.Categories==null)
            {
                return NoContent();
            }
            return await _categoryContex.Categories.ToListAsync();



        }

        [HttpGet("premium")]
        public async Task<ActionResult<IEnumerable<Category>>> GetPremium()
        {
            if (_categoryContex.Categories == null)
            {
                return NoContent();
            }

            return await _categoryContex.Categories
                .Where(c => c.ispremium == true)
                .ToListAsync();
        }
        [HttpPost("prem")] 
        public async Task<ActionResult<Category>> PostPremiumCategory(Category category)
        {
            if (category == null)
            {
                return BadRequest("Invalid data provided.");
            }


            _categoryContex.Categories.Add(category);
            await _categoryContex.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPremium), new { isprem = true }, category);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategories(int id)
        {
            if (_categoryContex.Categories == null)
            {
                return NoContent();
            }
            var category= await _categoryContex.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            return category;


        }
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory(Category category)
        {
            _categoryContex.Categories.Add(category);
            await _categoryContex.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCategories), new { id = category.Id }, category);
        }



        [HttpPut("{id}")]
        public async Task<ActionResult> PutCategory(int id, Category category)
        {
            if (id != category.Id) { return BadRequest(); }
            _categoryContex.Entry(category).State = EntityState.Modified;
            try
            {
                await _categoryContex.SaveChangesAsync();

            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCategory(int id)
        {
            if (_categoryContex.Categories == null)
            {
                return NotFound();
            }
            var category= await _categoryContex.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            _categoryContex.Categories.Remove(category);
            await _categoryContex.SaveChangesAsync();
            return Ok();
        }
    }
}
