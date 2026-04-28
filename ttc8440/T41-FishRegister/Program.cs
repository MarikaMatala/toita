using System.Collections.Generic;
using System.Collections.Specialized;
using System.Runtime.CompilerServices;

namespace T41_FishRegister
{
  
    public class Fisher : Register
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public Fisher(string name, string phone)
        {
            Name = name;
            Phone = phone;
        }
        public void AddFisher()
        {

            Console.WriteLine("** Add new Fisher **");
            Console.WriteLine("\nType Fisher Name");
            Name = Console.ReadLine();
            Console.WriteLine("Type Fisher Phone number");
            Phone = Console.ReadLine();
            FisherList.Add(new Fisher(Name, Phone));
            Console.WriteLine("\nNew Fishermen added to Fish-Register:");
            Console.WriteLine(FisherList.LastOrDefault() + "\n");
        }
        public void AddCatch(object newfish)
        {
            for (var i = 0; i < FisherList.Count; i++)
            {
                Console.WriteLine($"{i})" + FisherList[i]);
            }
            Console.WriteLine($"\n Who caught the fish? Insert index number.");
            var uservar = Convert.ToInt32(Console.ReadLine());
            var result = FisherList[uservar];
            FisherCatch.Add(new KeyValuePair<Fisher,Fish>(result, (Fish)newfish));
            var fisher = string.Join(Environment.NewLine, FisherCatch.Find(x => x.Key.Name == result.Name).Key.Name.ToString());
            var fish = string.Join(Environment.NewLine, FisherCatch.Find(x => x.Key.Name == result.Name).Value.ToString());
            Console.WriteLine("\nFishermen: " + fisher + " got a new fish:");
            Console.WriteLine(fish + "\n");
        }
        public void ShowFishByFisher()
        {
            Console.Clear();
            Console.WriteLine("** Show all fish caught by fisher ** \n");
            for (var i = 0; i < FisherList.Count; i++)
            {
                Console.WriteLine($"{i}." + FisherList[i]);
            }
            var uservar = Convert.ToInt32(Console.ReadLine());
            var result = FisherList[uservar];
            var Text = string.Join(Environment.NewLine, FisherCatch.Where(x => x.Key.Name == result.Name).Select(kvp => "\n" + kvp.Value.ToString()));
            Console.WriteLine("Fishermen: " + result.Name + " has got following fish:");
            Console.WriteLine(Text + "\n");

        }
        public override string ToString()
        {
            return "- Fishermen: " + Name + " Phone: " + Phone;
        }
    }
    public class Fish : Register
    {
        public string Species { get; set; }
        public double Length { get; set; }
        public double Weight { get; set; }
        public string Place { get; set; }
        public string Location { get; set; }
        public object AddFish()
        {
            Console.WriteLine("----Insert new Fish-------");
            Console.WriteLine("\nInsert species:");
            Species = Console.ReadLine();
            Console.WriteLine("Insert length 'cm' (double value):");
            Length = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Insert weight 'kg' (double value):");
            Weight = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Insert place where fish was caught:");
            Place = Console.ReadLine();
            Console.WriteLine("Insert location where fish was caught:");
            Location = Console.ReadLine();
            FishList.Add(new Fish(Species, Length, Weight, Place, Location));
            Console.Clear();
            return FishList.LastOrDefault();
        }
        public Fish(string species, double length, double weight, string place, string location)
        {
            Species = species;
            Length = length;
            Weight = weight;
            Place = place;
            Location = location;
        }
        public override string ToString()
        {
            return " -Species: " + Species + " " + Length + "cm " + Weight + "kg" +
                "\n -Place:" + Place +
                "\n -Location: " + Location;
        }
    }
    public class Register
    {
        public List<Fisher> FisherList = new();
        public List<Fish> FishList = new();
        public List<KeyValuePair<Fisher, Fish>> FisherCatch = new();
        public void ShowAllFish()
        {
            Console.Clear();
            Console.WriteLine("** ALl FISH IN REGISTER ** \nin sorted order \n");
            var lines = FisherCatch.OrderByDescending(kvp => kvp.Value.Weight).Select(kvp => kvp.Value.ToString() + "\n -Fishermen: " + kvp.Key.Name + "\n");
            var Text = string.Join(Environment.NewLine, lines);
            Console.WriteLine(Text);
           
        }
       
    }
    public class FisherandCatch
    {
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Register FishRegister = new();
            Fisher fisher = new(default,default);
            Fish fish = new(default, default, default, default, default);

            bool ShowMenu = true;
            while (ShowMenu)
            {
                Console.WriteLine("**Program FishRegister**" +
                "\n-------------------------------" +
                    "\nChoose 1) to Add Fishermen" +
                    "\nChoose 2) to Add Fish" +
                    "\nChoose 3) to view Fish caught by chosen Fishermen" +
                    "\nChoose 4) to view All Fish in register" +
                    "\nChoose 5) to quit" +
                    "\n-------------------------------"
                    );
                switch (Console.ReadLine())
                {
                    case "1":
                        Console.Clear();
                        fisher.AddFisher();
                        break;
                    case "2":
                        Console.Clear();
                        var newfish = fish.AddFish();
                        fisher.AddCatch(newfish);
                        break;
                    case "3":
                        Console.Clear();
                        fisher.ShowFishByFisher();
                        break;
                    case "4":
                        Console.Clear();
                        fisher.ShowAllFish();
                        break;
                    case "5":
                        ShowMenu = false;
                        break;
                    default:
                        break;
                }
            }            
        }
    }
}