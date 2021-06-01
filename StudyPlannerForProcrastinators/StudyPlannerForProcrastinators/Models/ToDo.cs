using System;

namespace StudyPlannerForProcrastinators.Models
{
    public class ToDo
    {
        public int Id { get; set; }
        //Title, usually linked to tasks
        public string Title { get; set; }
        //ToDo only lives for 1 day
        //Therefore this is a goal for today. 
        public string Goal { get; set; }
        //Time spent in minutes and seconds
        public int TimeSpent { get; set; }
        //Iterations are 25 minutes of studying. 
        //One task usually consists of 4 to 5 iterations, which means 1 to 2 hours. 
        public int IterationsSpent { get; set; }
        public string Comment { get; set; }
        
    }
}
