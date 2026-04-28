using System;

namespace Hill jumping
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int sum = 0;
            int min = int.MaxValue;
            int max = int.MinValue;

            for (int i = 0; i < 5; ++i)
            {
                Console.WriteLine("Enter points: ");
                int n = Convert.ToInt32(Console.ReadLine());
                sum += n;
                min = Math.Min(min, n);
                max = Math.Max(max, n);
            }

            sum -= min;
            sum -= max;

            Points(sum);
            Console.ReadLine();
            static void Points(int sum)
            {
                Console.WriteLine("Total points are: " + sum);
            }
        }
    }
}

