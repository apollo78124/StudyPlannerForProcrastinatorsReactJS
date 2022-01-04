using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudyPlannerForProcrastinators.Models
{
    public class Teacher
    {   
        [Key]
        public int ID { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public TeacherCredential Credential { get; set; }

    public ICollection<Student> Students { get; set; }
    }
}
