using System;

namespace Employee
{
    public class Employee
    {
        private string name;
        private string profession;
        private double salary;
        public double Salary
        {
            get { return salary; }
            set { salary = value; }
        }

        public string Profession
        {
            get { return profession; }
            set { profession = value; }
        }

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        public Employee() { }

        public Employee(string name, string profession, double salary)
        {
            Name = name;
            Profession = profession;
            Salary = salary;
        }

        public override string ToString()
        {
            return "- Name: " + Name + " Profession: " + Profession + " Salary: " + Salary;
        }
    }

    public class Boss : Employee
    {
        private string car;
        private double bonus;
        public double Bonus
        {
            get { return bonus; }
            set { bonus = value; }
        }

        public string Car
        {
            get { return car; }
            set { car = value; }
        }

        public Boss() { }

        public Boss(string name, string profession, double salary, string car, double bonus)
                     : base(name, profession, salary)
        {
            Car = car;
            Bonus = bonus;
        }
        public override string ToString()
        {
            return base.ToString() + " Car: " + Car + " Bonus: " + Bonus;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Employee employee = new Employee("Krisi Kernel", "Teacher", 1200);
            Console.WriteLine("Employee:\n {0}", employee.ToString());

            Boss boss = new Boss("Hanna Husso", "Head of Institute", 9000, "Audi", 5000);
            Console.WriteLine("\nBoss: \n {0}", boss.ToString());

            employee.Salary = 2200;
            employee.Profession = "Principal";

            Console.WriteLine("\nEmployee:\n {0}", employee.ToString());

            Console.ReadKey();
        }
    }
}



