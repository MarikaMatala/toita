using System;
using System.Collections.Generic;

namespace SchoolCourses
{
    // Define the ICourse interface
    public interface ICourse
    {
        string Name { get; set; }
        int Credits { get; set; }
        List<Student> EnrolledStudents { get; set; }
        void Enroll(Student student);
        void DisplayEnrollment();
    }

    // Define the Student class
    public class Student
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public int ID { get; set; }
    }

    // Define the Course class that implements the ICourse interface
    public class Course : ICourse
    {
        public string Name { get; set; }
        public int Credits { get; set; }
        public List<Student> EnrolledStudents { get; set; }

        // Constructor for the Course class
        public Course(string name, int credits)
        {
            Name = name;
            Credits = credits;
            EnrolledStudents = new List<Student>();
        }

        // Implement the Enroll method
        public void Enroll(Student student)
        {
            EnrolledStudents.Add(student);
        }

        // Implement the DisplayEnrollment method
        public void DisplayEnrollment()
        {
            Console.WriteLine("Enrolled students for {0} ({1} credits):", Name, Credits);
            foreach (Student student in EnrolledStudents)
            {
                Console.WriteLine(" - {0}, ID {1}, {2} years old, email: {3}", student.Name, student.ID, student.Age, student.Email);
            }
        }
    }

    // Main program
    class Program
    {
        static void Main(string[] args)
        {
            // Create some sample students
            Student student1 = new Student { Name = "Alice", Age = 20, Email = "alice@example.com", ID = 1 };
            Student student2 = new Student { Name = "Bob", Age = 21, Email = "bob@example.com", ID = 2 };
            Student student3 = new Student { Name = "Charlie", Age = 22, Email = "charlie@example.com", ID = 3 };

            // Create some sample courses
            ICourse course1 = new Course("Introduction to Computer Science", 3);
            ICourse course2 = new Course("Data Structures and Algorithms", 4);

            // Enroll the students in the courses
            course1.Enroll(student1);
            course1.Enroll(student2);
            course2.Enroll(student2);
            course2.Enroll(student3);

            // Display the enrollment for each course
            course1.DisplayEnrollment();
            course2.DisplayEnrollment();

            Console.ReadKey();
        }
    }
}
