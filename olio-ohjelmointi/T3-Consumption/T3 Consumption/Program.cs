using System;

namespace T3Consumption
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the distance traveled (in kilometers):");
            if (!double.TryParse(Console.ReadLine(), out double distance))
            {
                Console.WriteLine("Invalid input. Please enter a number.");
                return;
            }

            (double fuelConsumed, double cost) = CalculateTripCost(distance);

            Console.WriteLine($"Fuel consumption is {fuelConsumed:F2} liters and it costs {cost:F2} euros.");
        }

        static (double, double) CalculateTripCost(double distance)
        {
            Random random = new Random();

            double fuelConsumption = random.NextDouble() * (9 - 6) + 6;
            double fuelConsumed = fuelConsumption * distance / 100;

            double fuelPrice = random.NextDouble() * (2.5 - 1.75) + 1.75;
            double cost = fuelConsumed * fuelPrice;

            return (fuelConsumed, cost);
        }
    }
}