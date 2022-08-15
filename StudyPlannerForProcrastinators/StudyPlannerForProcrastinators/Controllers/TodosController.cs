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
    public class TodosController : ControllerBase
    {
        private readonly MockDbService dBService;
        private readonly StudyPlannerDbContext _context;
        /**
        public TodosController()
        {
            this.dBService = new MockDbService();
        }
        */

        public TodosController(StudyPlannerDbContext context)
        {
            this.dBService = new MockDbService();
            _context = context;
        }

        // GET /todos
        [HttpGet]
        public IEnumerable<ToDo> Get()
        {
            IEnumerable<ToDo> todoList = _context.ToDos.ToArray();
            return todoList;
        }
        
        // GET /todos
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(_context.ToDos.FindAsync(id));
        }
        // POST /todos
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ToDo todo)
        {
            
            todo.StudentID = 6;
            _context.ToDos.Add(todo);
            _context.SaveChanges();
            return CreatedAtAction("Get", todo);
        }
        // PUT /todos/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] ToDo todo)
        {
            
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            var existingToDo = _context.ToDos.Where(s => s.ID == id)
                                                    .FirstOrDefault<ToDo>();

            if (existingToDo != null)
            {
                existingToDo.Comment = todo.Comment;
                existingToDo.Goal = todo.Goal;
                existingToDo.IterationsSpent = todo.IterationsSpent;
                existingToDo.TimeSpent = todo.TimeSpent;
                existingToDo.Title = todo.Title;

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
            var todo = _context.ToDos.Find(id);
            _context.Remove(todo);
            _context.SaveChanges();
            return NoContent();
        }
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
