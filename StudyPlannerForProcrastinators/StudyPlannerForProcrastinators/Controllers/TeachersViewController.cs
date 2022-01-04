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
    [Route("[controller]")]
    public class TeachersViewController : ControllerBase
    {
        private readonly MockDbService dBService;
        private readonly StudyPlannerDbContext _context;
        /**
        public TodosController()
        {
            this.dBService = new MockDbService();
        }
        */

        public TeachersViewController(StudyPlannerDbContext context)
        {
            this.dBService = new MockDbService();
            _context = context;
        }

        // GET /teachersView
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            IEnumerable<Student> studentList = _context.Students.ToArray();
            return studentList;
        }

        // GET /teachersView
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(_context.Students.FindAsync(id));
        }
        // POST /teachersView
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Student student)
        {

            student.TeacherFk = 1;
            _context.Students.Add(student);
            _context.SaveChanges();
            return CreatedAtAction("Get", student);
        }
        // PUT /teachersView/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Student student)
        {

            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            var existingStudent = _context.Students.Where(s => s.ID == id)
                                                    .FirstOrDefault<Student>();

            if (existingStudent != null)
            {
                existingStudent.LastName = student.LastName;
                existingStudent.FirstMidName = student.FirstMidName;
                existingStudent.TeacherFk = 1;
                _context.SaveChanges();
            }
            else
            {
                return NotFound();
            }

            return Ok();
        }
        // DELETE /todos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var student = _context.Students.Find(id);
            _context.Remove(student);
            _context.SaveChanges();
            return NoContent();
        }
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
