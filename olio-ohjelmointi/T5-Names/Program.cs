using System;
using System.Collections.Generic;

namespace T5Names
{
    struct Person
    {
        public string Name;
        public int BirthYear;

        public int Age => DateTime.Now.Year - BirthYear;
    }

    class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>();

            Console.WriteLine("Please, give names and birth year of a person. Empty input will stop the input.");
            while (true)
            {
                Console.Write("Give a name: ");
                string input = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(input))
                {
                    break;
                }

                string[] parts = input.Split(',');
                string name = parts[0].Trim();
                int birthYear = int.Parse(parts[1].Trim());

                Person person = new Person
                {
                    Name = name,
                    BirthYear = birthYear
                };

                people.Add(person);
            }

            Console.WriteLine();

            people.Sort((a, b) => a.BirthYear.CompareTo(b.BirthYear));

            Console.WriteLine($"{people.Count} names are given:");
            foreach (Person person in people)
            {
                Console.WriteLine($"{person.Name} is {person.Age} years old.");
            }

            Console.WriteLine("Press any key to quit...");
            Console.ReadKey();
        }
    }
}
