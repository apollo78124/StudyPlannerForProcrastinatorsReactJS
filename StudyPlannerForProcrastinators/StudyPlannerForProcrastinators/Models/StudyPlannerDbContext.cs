using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyPlannerForProcrastinators.Models
{
    public class StudyPlannerDbContext : DbContext
    {
        
        public StudyPlannerDbContext(DbContextOptions<StudyPlannerDbContext> options)
        : base(options)
        {
        }
        public DbSet<ToDo> ToDos { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ToDo>().ToTable("ToDo");
            modelBuilder.Entity<Teacher>().ToTable("Teacher");
            modelBuilder.Entity<Student>().ToTable("Student");
        }

    }
}
