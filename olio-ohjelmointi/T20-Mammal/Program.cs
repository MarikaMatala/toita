using System;

abstract class Mammal
{
    public int Age { get; set; }

    public abstract void Move();
}

class Human : Mammal
{
    public string Name { get; set; }
    public int Weight { get; set; }
    public int Height { get; set; }

    public void Grow()
    {
        Age++;
    }

    public override void Move()
    {
        Console.WriteLine("Moving");
    }
}

class Baby : Human
{
    public string Diaper { get; set; }

    public override void Move()
    {
        Console.WriteLine("Crawling");
    }
}

class Adult : Human
{
    public string Auto { get; set; }

    public override void Move()
    {
        Console.WriteLine("Walking");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // create some humans, babies and adults
        var human1 = new Human { Name = "Alice", Weight = 70, Height = 170, Age = 20 };
        var baby1 = new Baby { Name = "Bob", Weight = 5, Height = 50, Age = 1, Diaper = "cloth" };
        var adult1 = new Adult { Name = "Charlie", Weight = 80, Height = 180, Age = 30, Auto = "sedan" };

        // print their information to the console
        Console.WriteLine($"Human: {human1.Name}, {human1.Weight}kg, {human1.Height}cm, {human1.Age} years old");
        human1.Move();
        human1.Grow();
        Console.WriteLine($"New age: {human1.Age}");

        Console.WriteLine($"Baby: {baby1.Name}, {baby1.Weight}kg, {baby1.Height}cm, {baby1.Age} years old, {baby1.Diaper} diaper");
        baby1.Move();
        baby1.Grow();
        Console.WriteLine($"New age: {baby1.Age}");

        Console.WriteLine($"Adult: {adult1.Name}, {adult1.Weight}kg, {adult1.Height}cm, {adult1.Age} years old, {adult1.Auto} car");
        adult1.Move();
        adult1.Grow();
        Console.WriteLine($"New age: {adult1.Age}");
    }
}

