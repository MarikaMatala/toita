using System;

class Animal
{
    public string Name { get; set; }

    public virtual void MakeSound()
    {
        Console.WriteLine("The animal makes a sound.");
    }
}

class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("The dog barks.");
    }
}

class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("The cat meows.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Animal animal = new Animal();
        animal.Name = "Generic Animal";
        animal.MakeSound();

        Dog dog = new Dog();
        dog.Name = "Fido";
        dog.MakeSound();

        Cat cat = new Cat();
        cat.Name = "Fluffy";
        cat.MakeSound();
    }
}

