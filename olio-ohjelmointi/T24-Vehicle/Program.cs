using System;
using System.Collections.Generic;

class Tire
{
    public string Manufacturer { get; set; }
    public string Model { get; set; }
    public string TireSize { get; set; }
}

class Vehicle
{
    public string Name { get; set; }
    public string Model { get; set; }
    public List<Tire> Tires { get; set; }

    public Vehicle(string name, string model)
    {
        Name = name;
        Model = model;
        Tires = new List<Tire>();
    }
}

class Program
{
    static void Main(string[] args)
    {
        // create some Tire objects
        Tire porscheTire = new Tire { Manufacturer = "Nokia", Model = "Hakkapeliitta", TireSize = "205R16" };
        Tire ducatiTire1 = new Tire { Manufacturer = "MIC", Model = "Pilot", TireSize = "160R17" };
        Tire ducatiTire2 = new Tire { Manufacturer = "MIC", Model = "Pilot", TireSize = "140R16" };

        // create some Vehicle objects with tires
        Vehicle porsche = new Vehicle("Porsche", "911");
        porsche.Tires.Add(porscheTire);

        Vehicle ducati = new Vehicle("Ducati", "Diavel");
        ducati.Tires.Add(ducatiTire1);
        ducati.Tires.Add(ducatiTire2);

        // print out the vehicles and their tires
        Console.WriteLine("Created a new vehicle " + porsche.Name + " model " + porsche.Model);
        Console.WriteLine("Tire " + porscheTire.Manufacturer + " added to vehicle " + porsche.Name);
        Console.WriteLine("Vehicle Name: " + porsche.Name + " Model: " + porsche.Model + " has tires:");
        foreach (Tire tire in porsche.Tires)
        {
            Console.WriteLine("-Name: " + tire.Manufacturer + " Model: " + tire.Model + " TireSize: " + tire.TireSize);
        }

        Console.WriteLine();

        Console.WriteLine("Created a new vehicle " + ducati.Name + " model " + ducati.Model);
        Console.WriteLine("Tire " + ducatiTire1.Manufacturer + " added to vehicle " + ducati.Name);
        Console.WriteLine("Tire " + ducatiTire2.Manufacturer + " added to vehicle " + ducati.Name);
        Console.WriteLine("Vehicle Name: " + ducati.Name + " Model: " + ducati.Model + " has tires:");
        foreach (Tire tire in ducati.Tires)
        {
            Console.WriteLine("-Name: " + tire.Manufacturer + " Model: " + tire.Model + " TireSize: " + tire.TireSize);
        }

        Console.ReadKey();
    }
}
