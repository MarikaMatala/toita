using System.Runtime.Intrinsics.X86;
using System.Text.RegularExpressions;

namespace T37_Dice
{
    public class Dice
    {
        public Random rand = new Random();
        public List<int> list = new List<int>();
        public void TestRollDice()
        {
            int number = rand.Next(1, 7);
            Console.WriteLine($"Dice, one test throw value is: {number}");
        }
        public string RollDice(int amount)
        {
            
            for (int i = 0; i < amount; i++)
            {
                int number = rand.Next(1, 7);
                list.Add(number);
            }
            double Avg = list.Average();

            var msg = $"\nDice is now thrown {amount} times, average is {Avg}";
            return msg;
        }
        public string NumbersOccurred()
        {
            IEnumerable<int> list1 = list.Where(num => num == 1);
            IEnumerable<int> list2 = list.Where(num => num == 2);
            IEnumerable<int> list3 = list.Where(num => num == 3);
            IEnumerable<int> list4 = list.Where(num => num == 4);
            IEnumerable<int> list5 = list.Where(num => num == 5);
            IEnumerable<int> list6 = list.Where(num => num == 6);

            var msg = $"\n-1 Count is {list1.Count()}" +
                $"\n-2 Count is {list2.Count()}" +
                $"\n-3 Count is {list3.Count()}" +
                $"\n-4 Count is {list4.Count()}" +
                $"\n-5 Count is {list5.Count()}" +
                $"\n-6 Count is {list6.Count()}";
            return msg;
        }

        
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Dice dice = new Dice();
            dice.TestRollDice();

            Console.WriteLine("How many times you wish to throw?");
            var amount = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(dice.RollDice(amount));
            Console.WriteLine(dice.NumbersOccurred());
        }
    }
}