using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudyPlannerForProcrastinators.Models
{
    public class StudentCredential
    {   
        [Key]
        public int UserID { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        [ForeignKey("Student")]
        public int StudentID { get; set; }
        public Student Student { get; set; }
    }

    public class TeacherCredential
    {   
        [Key]
        public int UserID { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        [ForeignKey("Teacher")]
        public int TeacherID { get; set; }
        public Teacher Teacher { get; set; }
    }
}
