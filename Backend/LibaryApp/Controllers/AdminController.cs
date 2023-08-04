using LibaryApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibaryApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly AdminContex _adminContex;
        public AdminController(AdminContex adminContex)
        {
            _adminContex = adminContex;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmins()
        {
            if (_adminContex.Admins == null)
            {
                return NoContent();
            }
            return await _adminContex.Admins.ToListAsync();


        }

        [HttpPost]
        public async Task<ActionResult<Admin>> PostAuthor(Admin admin)
        {
            _adminContex.Admins.Add(admin);
            await _adminContex.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAdmins), new { id = admin.Id }, admin);
        }

       
        [HttpGet("{username}/{password}")]
        public async Task<ActionResult<bool>> CheckAdminExists(string username, string password)
        {
            var adminExists = await _adminContex.Admins.AnyAsync(a => a.username == username && a.password == password);
            Console.WriteLine(adminExists);
            return adminExists;
        }

    }
}
