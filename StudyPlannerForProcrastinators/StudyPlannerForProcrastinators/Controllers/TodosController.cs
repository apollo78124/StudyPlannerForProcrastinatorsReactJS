using Microsoft.AspNetCore.Mvc;
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
        public TodosController()
        {
            this.dBService = new MockDbService();
        }
        // GET /todos
        [HttpGet]
        public IEnumerable<ToDo> Get()
        {
            return dBService.GetAllToDo().ToArray();
        }
        // GET /todos
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(dBService.GetToDoById(id));
        }
        // POST /todos
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ToDo todo)
        {
            return CreatedAtAction("Get", new { id = todo.Id }, dBService.CreateToDo(todo));
        }
        // PUT /todos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] ToDo todo)
        {
            dBService.UpdateToDo(id, todo);
            return NoContent();
        }
        // DELETE /todos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            dBService.DeleteToDo(id);
            return NoContent();
        }
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
