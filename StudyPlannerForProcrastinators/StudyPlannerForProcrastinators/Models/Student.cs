using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyPlannerForProcrastinators.Models
{
    public class Student
    {
        public int ID { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }

        public int TeacherID { get; set; }
        public Teacher Teacher { get; set; }
        public ICollection<ToDo> ToDos { get; set; }
    }
}
