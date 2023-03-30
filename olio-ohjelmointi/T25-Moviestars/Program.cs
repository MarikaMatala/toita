using System;
using System.Collections.Generic;

public class Human
{
    public string Name { get; set; }
    public int BirthYear { get; set; }
}

public class Actor : Human
{
}

public class Director : Human
{
}

public class Movie
{
    public string Name { get; set; }
    public int Year { get; set; }
    public Director Director { get; }
    public List<Actor> Actors { get; }

    public Movie(string name, int year, Director director, List<Actor> actors)
    {
        Name = name;
        Year = year;
        Director = director;
        Actors = actors;
    }
}

class Program
{
    static void Main(string[] args)
    {
        var director1 = new Director { Name = "Christopher Nolan", BirthYear = 1970 };
        var actor1 = new Actor { Name = "Leonardo DiCaprio", BirthYear = 1974 };
        var actor2 = new Actor { Name = "Joseph Gordon-Levitt", BirthYear = 1981 };
        var actors = new List<Actor> { actor1, actor2 };
        var movie1 = new Movie("Inception", 2010, director1, actors);

        var director2 = new Director { Name = "Quentin Tarantino", BirthYear = 1963 };
        var actor3 = new Actor { Name = "Samuel L. Jackson", BirthYear = 1948 };
        var actor4 = new Actor { Name = "John Travolta", BirthYear = 1954 };
        var actors2 = new List<Actor> { actor3, actor4 };
        var movie2 = new Movie("Pulp Fiction", 1994, director2, actors2);

        Console.WriteLine("Movie 1: " + movie1.Name);
        Console.WriteLine("Year: " + movie1.Year);
        Console.WriteLine("Director: " + movie1.Director.Name);
        Console.WriteLine("Actors:");
        foreach (var actor in movie1.Actors)
        {
            Console.WriteLine("- " + actor.Name);
        }

        Console.WriteLine("");

        Console.WriteLine("Movie 2: " + movie2.Name);
        Console.WriteLine("Year: " + movie2.Year);
        Console.WriteLine("Director: " + movie2.Director.Name);
        Console.WriteLine("Actors:");
        foreach (var actor in movie2.Actors)
        {
            Console.WriteLine("- " + actor.Name);
        }

        Console.ReadKey();
    }
}
