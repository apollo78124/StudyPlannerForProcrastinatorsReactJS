using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyPlannerForProcrastinators.Models
{
    public static class DbInitializer
    {
        public static void Initialize(StudyPlannerDbContext context)
        {
            context.Database.EnsureCreated();
            /**
            var teachers = new Teacher[]
            {
                new Teacher{FirstMidName="Tom", LastName="Johnson"}
            };
            foreach (Teacher t in teachers)
            {
                context.Teachers.Add(t);
            }
            context.SaveChanges();

            var students = new Student[]
            {
            new Student{FirstMidName="Carson",LastName="Alexander", TeacherID=1},
            new Student{FirstMidName="Meredith",LastName="Alonso", TeacherID=1},
            new Student{FirstMidName="David",LastName="Lee", TeacherID=1},
            new Student{FirstMidName="Peehu",LastName="Sharma", TeacherID=1},
            new Student{FirstMidName="Amir",LastName="Khan", TeacherID=1}
            };
            foreach (Student s in students)
            {
                context.Students.Add(s);
            }
            context.SaveChanges();
            */
            var todos = new ToDo[]
            {
            new ToDo{Comment= "No Comment", Goal="Make react timer", IterationsSpent=1, StudentID=3, TimeSpent=25, Title="React homework"},
            new ToDo{Comment= "No Comment", Goal="Make java timer", IterationsSpent=1, StudentID=4, TimeSpent=25, Title="C homework"},
            new ToDo{Comment= "No Comment", Goal="Make C timer", IterationsSpent=1, StudentID=5, TimeSpent=25, Title="D homework"},
            new ToDo{Comment= "No Comment", Goal="Make D timer", IterationsSpent=1, StudentID=6, TimeSpent=25, Title="F homework"},
            new ToDo{Comment= "No Comment", Goal="Make F timer", IterationsSpent=1, StudentID=7, TimeSpent=25, Title="G homework"},
            new ToDo{Comment= "No Comment", Goal="Make G timer", IterationsSpent=1, StudentID=3, TimeSpent=25, Title="B homework"},
            new ToDo{Comment= "No Comment", Goal="Make Y timer", IterationsSpent=1, StudentID=4, TimeSpent=25, Title="N homework"},
            new ToDo{Comment= "No Comment", Goal="Make T timer", IterationsSpent=1, StudentID=5, TimeSpent=25, Title="R homework"},
            new ToDo{Comment= "No Comment", Goal="Make E timer", IterationsSpent=1, StudentID=6, TimeSpent=25, Title="E homework"},
            new ToDo{Comment= "No Comment", Goal="Make W timer", IterationsSpent=1, StudentID=7, TimeSpent=25, Title="Q homework"},
            new ToDo{Comment= "No Comment", Goal="Make D timer", IterationsSpent=1, StudentID=3, TimeSpent=25, Title="M homework"},
            new ToDo{Comment= "No Comment", Goal="Make X timer", IterationsSpent=1, StudentID=4, TimeSpent=25, Title="U homework"},
            new ToDo{Comment= "No Comment", Goal="Make C timer", IterationsSpent=1, StudentID=5, TimeSpent=25, Title="I homework"},
            new ToDo{Comment= "No Comment", Goal="Make B timer", IterationsSpent=1, StudentID=6, TimeSpent=25, Title="OZ homework"}
            };
            foreach (ToDo e in todos)
            {
                context.ToDos.Add(e);
            }
            context.SaveChanges();
        }
    }
}
