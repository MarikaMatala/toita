using System;
using System.Collections.Generic;

class Refrigerator
{
    private List<string> contents;

    public Refrigerator()
    {
        contents = new List<string>();
    }

    public void AddItem(string item)
    {
        contents.Add(item);
        Console.WriteLine("Added {0} to the refrigerator.", item);
    }

    public void RemoveItem(string item)
    {
        if (contents.Remove(item))
        {
            Console.WriteLine("Removed {0} from the refrigerator.", item);
        }
        else
        {
            Console.WriteLine("{0} not found in the refrigerator.", item);
        }
    }

    public void ListContents()
    {
        if (contents.Count == 0)
        {
            Console.WriteLine("Refrigerator is empty.");
        }
        else
        {
            Console.WriteLine("Refrigerator contents:");
            foreach (string item in contents)
            {
                Console.WriteLine("- {0}", item);
            }
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        Refrigerator fridge = new Refrigerator();

        fridge.AddItem("Milk");
        fridge.AddItem("Eggs");
        fridge.AddItem("Cheese");

        fridge.ListContents();

        fridge.RemoveItem("Eggs");

        fridge.ListContents();
    }
}


