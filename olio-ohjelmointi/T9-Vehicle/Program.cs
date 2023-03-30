using System;

namespace T9Venicle
{
    public class Vehicle
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Speed { get; set; }
        public int Tires { get; set; }
        public string ShowInfo()
        {
            return $"Vehicle is {Brand} and model is {Model}";
        }
        public override string ToString()
        {
            return "Vehicle is " + Brand + ", model is " + Model + ", speed is " + Speed + " km/h and number of tires is " + Tires;
        }
        public Vehicle(string brand, string model, int speed, int tires)
        {
            this.Brand = brand;
            this.Model = model;
            this.Speed = speed;
            this.Tires = tires;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Vehicle vehicle1 = new Vehicle("Honda", "Civic", 120, 4);
            Vehicle vehicle2 = new Vehicle("Ducati", "Diavel", 244, 2);

            vehicle1.Brand = "Toyota";
            vehicle1.Model = "Camry";
            vehicle1.Speed = 120;
            vehicle1.Tires = 4;

            vehicle2.Brand = "Yamaha";
            vehicle2.Model = "650 Dragstar Classic";
            vehicle2.Speed = 115;
            vehicle2.Tires = 2;

            Console.WriteLine(vehicle1.ShowInfo());
            Console.WriteLine(vehicle2);
        }
    }
}


