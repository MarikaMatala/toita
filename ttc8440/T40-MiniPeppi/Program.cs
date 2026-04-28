using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Reflection.Metadata;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml;

namespace T40_MiniPeppi
{
    public class Student
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string SID { get; set; }
        public string Group { get; set; }
        
        public Student(string firstname, string lastname, string sid, string group)
        {
            FirstName = firstname;
            LastName = lastname;
            SID = sid;
            Group = group;
        }
        public override string ToString()
        {
            return $"{FirstName} {LastName} {SID} {Group}";
        }
    }
    public class ListStudents : Student
    {
        public List<Student> Students = new();
        public bool Continue = true;
        public int value = 1;
        public ListStudents(string firstname,string lastname, string sid,string group) : base(firstname, lastname, sid, group)
        {
        }
        public string GenerateSID()
        {
            string fn = FirstName[0].ToString().ToUpper();
            string ln = LastName[0].ToString().ToUpper();
            return $"{fn}{ln}{GetNextValue():000}";
        }
        public int GetNextValue()
        {
            return value++;
        }
        public void PopulateStudents(string fname,string lname,string group)
        {
            FirstName = fname;
            LastName = lname;
            SID = GenerateSID();
            Group = group;
            
            Students.Add(new Student(FirstName, LastName, SID, Group));
        }
        public void AddStudents()
        {
            Console.WriteLine("Add New student, start by giving First name");
            FirstName = Console.ReadLine();
            Console.WriteLine("Give Last name");
            LastName = Console.ReadLine();
            Console.WriteLine("Give a group name");
            Group = Console.ReadLine();
            SID = GenerateSID();
            Students.Add(new Student(FirstName, LastName, SID, Group));
        }
        public int RemoveStudent()
        {
            Console.WriteLine("Give student SID to remove student");
            var sid = Console.ReadLine().ToUpper();
            Students.RemoveAll(x => x.SID == sid);
            return value--;


        }
        
        public void ShowStudents()
        {
            Console.WriteLine($"The first student in the MiniPeppi:\n-{Students.First()}" +
                $"\nThe last student in the MiniPeppi:\n-{Students.Last()}\n");

            Console.WriteLine($"\nThe all {Students.Count} in the MiniPeppi");
            foreach (Student student in Students)
            {
                Console.WriteLine("-"+student);
            }
            // Sort by lastname using LINQ
            var SortedStudents = Students.OrderBy(x => x.LastName);
            var SortedList = SortedStudents.ToList();

            Console.WriteLine("\nThe all students in alphabetical order in the MiniPeppi");
            foreach (var student in SortedStudents)
            {
                Console.WriteLine("-"+student.FirstName+" "+student.LastName);
            }
                
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            ListStudents listStudents = new ListStudents(default,default,default,default);

            listStudents.PopulateStudents("Hanna", "Husso", "TTV19S1");
            listStudents.PopulateStudents("Kirsi", "Kernel", "TTV19S2");
            listStudents.PopulateStudents("Masa", "Niemi", "TTV19S3");
            listStudents.PopulateStudents("Teppo", "Tester", "TIC21S");
            listStudents.PopulateStudents("Allan", "Aalto", "TTV19SMM");
            // Using SWITCH CASE for menu.
            bool ShowMenu = true;
            while (ShowMenu)
            {
                
                Console.WriteLine("Program: MiniPeppi"+
                    "\n-------------------------------" +
                    "\nChoose 1) to add student" +
                    "\nChoose 2) to view students" +
                    "\nChoose 3) to remove students" +
                    "\nChoose 4) to quit" +
                    "\n-------------------------------"
                    );
       
                switch (Console.ReadLine())
                {
                    case "1":
                        Console.Clear();
                        listStudents.AddStudents();
                        break;
                    case "2":
                        Console.Clear();
                        listStudents.ShowStudents();
                        break;
                    //ShowMenu = false;
                    case "3":
                        Console.Clear();
                        listStudents.RemoveStudent();
                        //ShowMenu = false;
                        break;
                    case "4":
                        ShowMenu = false;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}