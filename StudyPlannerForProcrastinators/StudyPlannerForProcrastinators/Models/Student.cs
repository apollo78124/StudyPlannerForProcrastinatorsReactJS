using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudyPlannerForProcrastinators.Models
{
    public class Student
    {   
        [Key]
        public int ID { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public StudentCredential Credential { get; set; }

        [ForeignKey("Teacher")]
        public int TeacherFk { get; set; }
        public Teacher Teacher { get; set; }
        public ICollection<ToDo> ToDos { get; set; }
    }
}
