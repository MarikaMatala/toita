using System.Net.Http.Headers;

namespace T34_Unit_test_deliveries
{
    interface ICalc
    {
        double Sum(double[]array);
        double Average (double[] array);
        double Min(double[] array);
        double Max(double[] array);
    }
    public class ArrayCalc : ICalc
    {
        public double Sum(double[] array)
        {
            double sum = array.Sum();
            sum = Math.Round(sum, 2);
            Console.WriteLine($"Result of Sum: {sum}");
            return sum;
        }
        public double Average(double[] array)
        {
            double avg = array.Average();
            avg = Math.Round(avg, 2);
            Console.WriteLine($"Result of Average: {avg}");
            return avg;
        }
        public double Min(double[] array)
        {
            double min = array.Min();
            min = Math.Round(min, 2);
            Console.WriteLine($"Result of Min: {min}");
            return min;
        }
        public double Max(double[] array)
        {
            double max = array.Max();
            max = Math.Round(max, 2);
            Console.WriteLine($"Result of Max: {max}");
            return max;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            ArrayCalc calc = new ArrayCalc();
            double[] array = { 1.0, 2.0, 3.3, 5.5, 6.3, -4.5, 12.0 };
            
            calc.Sum(array);
            calc.Average(array);
            calc.Min(array);
            calc.Max(array);

            // Unit test with empty array will return 0 for sum, but error for other calculations <System.InvalidOperationException: Sequence contains no elements>.
        }
    }
}