using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace T31_Random
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        Random random = new Random();
        public char randomLetter()
        {
            int num = random.Next(0, 26);
            char C = (char)('a' + num);
            return C;
        }
        public Person()
        {
            NewPersonName();
        }

        public void NewPersonName()
        {
            for (int i = 0; i < 4; i++)
            {
                FirstName += randomLetter();
            }


            for (int i = 0; i < 10; i++)
            {
                LastName += randomLetter();
            }
        }

        public override string ToString()
        {
            return $"{FirstName} {LastName}";
        }

    }
    public class GeneratePeople
    {
        List<Person> list = new();
        int ObjectCount = 10000;

        public string AddPeople()
        {
            Stopwatch AddObjects = new Stopwatch();
            AddObjects.Start();
            for (int i = 0; i < ObjectCount; i++)
            {
                list.Add(new Person());
            }
            AddObjects.Stop();
            string ObjectAddResult = "List Collection:" +
                $"\n- People count: {list.Count}" +
                $"\n- Adding Time:  {AddObjects.Elapsed.TotalMilliseconds:0.00}ms";
           

            return ObjectAddResult;
        }
        public string FindPeople()
        {
            List<Person> Findlist = new List<Person>();
            Stopwatch FindObjects = new Stopwatch();
            FindObjects.Start();
            for (int i = 0; i < 1000; i++)
            {
                var RandomName = new Person().FirstName;
                var item = list.Find(x => x.FirstName == RandomName);
                if (item != null)
                {
                    Findlist.Add(item);
                }
            }
            FindObjects.Stop();
            string ObjectFindResult = $"- Searching Time: {FindObjects.Elapsed.TotalMilliseconds: 0.00}ms \n";
            var length = Findlist.Count;
            var showPPl = String.Join("\n\t", Findlist);
            return "\nFinding persons in List collection (by first name):" +
                $"\nPersons tried to find: 1000" +
                $"\nPersons found: {length}" +
                $"\n{ObjectFindResult}" +
                string.Join("\n", Findlist.Select(p => $"\tFound person with {p.FirstName} : {p.FirstName} {p.LastName}"));


        }
    }
    public class GenerateDictPeople
    {
        public Dictionary<string, Person> PersonDict = new();
        int ObjectCount = 10000;
        public string AddPerson()
        {
            
            Stopwatch AddDict = new Stopwatch();
            AddDict.Start();
            while (PersonDict.Count < ObjectCount)
            {
                Person person = new Person();
                PersonDict[person.FirstName] = person;
            }
            AddDict.Stop();
            string ObjectFindResult = "Adding Time:" + AddDict.ElapsedMilliseconds.ToString() + " ms";
            return $"\nDictionary Collection: " +
                $"\n- Adding time: {AddDict.Elapsed.TotalMilliseconds:0.00} ms" +
                $"\n- Persons Count: {PersonDict.Count}";
        }
        public string SearchCollection()
        {
            List<Person> FindDict = new();
            Stopwatch FindDictionary = new();
            FindDictionary.Start();
            for (int i = 0; i < 1000; i++)
            {
                var RandomName = new Person().FirstName;
                if (PersonDict.ContainsKey(RandomName))
                    FindDict.Add(PersonDict[RandomName]);

            }
            FindDictionary.Stop();
            return "\nFinding persons in Dictionary collection (by first name):" +
                $"\n- Persons tried to find : {1000}" +
                $"\n- Persons found : {FindDict.Count}" +
                $"\n- Searching time: {FindDictionary.Elapsed.TotalMilliseconds:0.00} ms\n" +
                $""+ string.Join("\n", FindDict.Select(p => $"\tFound person with {p.FirstName} : {p.FirstName} {p.LastName}"));

        }

    }
    internal class Program
    {
        static void Main(string[] args)
        {
            GeneratePeople generate = new();
            GenerateDictPeople generateDict = new();
            
            Console.WriteLine(generate.AddPeople());
            Console.WriteLine(generate.FindPeople());
            Console.WriteLine(generateDict.AddPerson());
            Console.WriteLine(generateDict.SearchCollection());
        }
    }
}