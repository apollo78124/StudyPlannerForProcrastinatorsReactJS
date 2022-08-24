using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyPlannerForProcrastinators.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyPlannerForProcrastinators.Controllers
{
    [ApiController]
    [Route("loginuser")]
    public class LoginController : ControllerBase
    {
        private readonly MockDbService dBService;
        private readonly StudyPlannerDbContext _context;
        /**
        public TodosController()
        {
            this.dBService = new MockDbService();
        }
        */

        public LoginController(StudyPlannerDbContext context)
        {
            this.dBService = new MockDbService();
            _context = context;
        }

        // GET /todos
        [HttpGet]
        public ActionResult<string> Get()
        {
           
            return Content("Login Sucess");
        }

        // POST /todos
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] StudentCredential studentCredential)
        {
            if (_context.StudentCredentials.Where(s => s.username == studentCredential.username).Any())
            {
                if (_context.StudentCredentials.Where(s => s.username == studentCredential.username).FirstOrDefault().password == studentCredential.password) {
                    return Content(studentCredential.username + "?mockToken");
                }
            }
            return Content("Incorrect Credentials");
        }
       
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
