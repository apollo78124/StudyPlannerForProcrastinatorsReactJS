﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StudyPlannerForProcrastinators.Models;

namespace StudyPlannerForProcrastinators.Migrations
{
    [DbContext(typeof(StudyPlannerDbContext))]
    partial class StudyPlannerDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.Student", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstMidName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TeacherFk")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("TeacherFk");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.StudentCredential", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("StudentID")
                        .HasColumnType("int");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserID");

                    b.HasIndex("StudentID")
                        .IsUnique();

                    b.ToTable("StudentCredentials");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.Teacher", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstMidName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Teacher");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.TeacherCredential", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("TeacherID")
                        .HasColumnType("int");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserID");

                    b.HasIndex("TeacherID")
                        .IsUnique();

                    b.ToTable("TeacherCredentials");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.ToDo", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Goal")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IterationsSpent")
                        .HasColumnType("int");

                    b.Property<int>("StudentID")
                        .HasColumnType("int");

                    b.Property<int>("TimeSpent")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("StudentID");

                    b.ToTable("ToDo");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.Student", b =>
                {
                    b.HasOne("StudyPlannerForProcrastinators.Models.Teacher", "Teacher")
                        .WithMany("Students")
                        .HasForeignKey("TeacherFk")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.StudentCredential", b =>
                {
                    b.HasOne("StudyPlannerForProcrastinators.Models.Student", "Student")
                        .WithOne("Credential")
                        .HasForeignKey("StudyPlannerForProcrastinators.Models.StudentCredential", "StudentID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Student");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.TeacherCredential", b =>
                {
                    b.HasOne("StudyPlannerForProcrastinators.Models.Teacher", "Teacher")
                        .WithOne("Credential")
                        .HasForeignKey("StudyPlannerForProcrastinators.Models.TeacherCredential", "TeacherID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.ToDo", b =>
                {
                    b.HasOne("StudyPlannerForProcrastinators.Models.Student", "Student")
                        .WithMany("ToDos")
                        .HasForeignKey("StudentID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Student");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.Student", b =>
                {
                    b.Navigation("Credential");

                    b.Navigation("ToDos");
                });

            modelBuilder.Entity("StudyPlannerForProcrastinators.Models.Teacher", b =>
                {
                    b.Navigation("Credential");

                    b.Navigation("Students");
                });
#pragma warning restore 612, 618
        }
    }
}
