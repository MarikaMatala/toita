using System.Collections.Generic;
using System;

namespace T10Student
{
    public class Student
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int StudentNumber { get; set; }
        public string ShowInfo()
        {
            return $"{FirstName} {LastName}: {StudentNumber}";
        }
        public Student(string firstName, string lastName, int studentNumber)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.StudentNumber = studentNumber;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Student> students = new List<Student>();

            Student student1 = new Student("Jim", "Doe", 123456);
            Student student2 = new Student("Maria", "Brown", 666543);
            Student student3 = new Student("Nick", "Beckham", 712385);
            Student student4 = new Student("Nicole", "Doe", 998877);
            Student student5 = new Student("Samatha", "Johnson", 345612);
            students.Add(student1);
            students.Add(student2);
            students.Add(student3);
            students.Add(student4);
            students.Add(student5);

            students.Sort((x, y) => x.StudentNumber.CompareTo(y.StudentNumber));

            Console.WriteLine("Students information:");
            foreach (Student student in students)
            {
                Console.WriteLine(student.ShowInfo());
            }
        }
    }
}
