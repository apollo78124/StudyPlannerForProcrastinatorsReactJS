using System.Collections.Generic;
using System.Linq;

namespace StudyPlannerForProcrastinators.Models
{
    public class MockDbService
    {
        public int Count = 8;
        public List<ToDo> ToDoList;
        public MockDbService()
        {
            ToDoList = new List<ToDo>
                {
                    new ToDo { Id = 1, Title = "React Assignment 1", Goal = "Make CRUD table for users", IterationsSpent = 3, Comment = "No comment", TimeSpent = 0},
                    new ToDo { Id = 2, Title = "Java Study", Goal = "Read chapter 5", IterationsSpent = 5, Comment = "No comment", TimeSpent = 0},
                    new ToDo { Id = 3, Title = "C# Study", Goal = "Read chapter 6", IterationsSpent = 7, Comment = "No comment", TimeSpent = 0},
                    new ToDo { Id = 4, Title = "Android Assignment 2", Goal = "Fix gradle issue #566", IterationsSpent = 0, Comment = "No comment", TimeSpent = 0},
                    new ToDo { Id = 5, Title = "React Assignment 2", Goal = "Make CRUD table for users", IterationsSpent = 0, Comment = "No comment", TimeSpent = 0},
                    new ToDo { Id = 6, Title = "Java Study 2", Goal = "Read chapter 5", IterationsSpent = 0, Comment = "No comment", TimeSpent = 0},
                    new ToDo { Id = 7, Title = "C# Study 2", Goal = "Read chapter 6", IterationsSpent = 0, Comment = "No comment", TimeSpent = 0},
                    new ToDo { Id = 8, Title = "Android Assignment 3", Goal = "Fix gradle issue #566", IterationsSpent = 0, Comment = "No comment", TimeSpent = 0}
                };
        }
        public List<ToDo> GetAllToDo()
        {
            return ToDoList;
        }
        public ToDo GetToDoById(int id)
        {
            return ToDoList.Where(ta => ta.Id == id).FirstOrDefault();
        }
        public ToDo CreateToDo(ToDo todo)
        {
            todo.Id = ++Count;
            ToDoList.Add(todo);
            return todo;
        }
        public void UpdateToDo(int id, ToDo todo)
        {
            ToDo found = ToDoList.Where(n => n.Id == id).FirstOrDefault();
            found.Title = todo.Title;
            found.Goal = todo.Goal;
            found.IterationsSpent = todo.IterationsSpent;
            found.Comment = todo.Comment;
            found.TimeSpent = todo.TimeSpent;
        }
        public void DeleteToDo(int id)
        {
            ToDoList.RemoveAll(n => n.Id == id);
        }
    }
}
