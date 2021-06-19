using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyPlannerForProcrastinators.Models
{
    public class Teacher
    {
        public int ID { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }

        public ICollection<Student> Students { get; set; }
    }
}
