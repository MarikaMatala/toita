using System;
using System.Collections.Generic;

class CD
{
    public string Artist { get; set; }
    public string Name { get; set; }
    public string Genre { get; set; }
    public decimal Price { get; set; }
    public List<(string Name, string Duration)> Songs { get; set; }

    public string GetCDInfo()
    {
        string info = $"CD:\n\t-Artist: {Artist}\n\t-Name: {Name}\n\t-Genre: {Genre}\n\t-Price: ${Price}\n\tSongs:\n";
        foreach (var song in Songs)
        {
            info += $"\t--- Name: {song.Name} - {song.Duration}\n";
        }
        return info;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Create a new CD object
        var cd = new CD
        {
            Artist = "Nightwish",
            Name = "Endless Forms Most Beautiful",
            Genre = "Symphonic metal",
            Price = 19.9M,
            Songs = new List<(string, string)>
            {
                ("Shudder Before the Beautiful", "06:29"),
                ("Weak Fantasy", "05:23"),
                ("Elan", "04:45"),
                ("Yours Is an Empty Hope", "05:34"),
                ("Our Decades in the Sun", "06:37"),
                ("My Walden", "04:38"),
                ("Endless Forms Most Beautiful", "05:07"),
                ("Edema Ruh", "05:15"),
                ("Alpenglow", "04:45"),
                ("The Eyes of Sharbat Gula", "06:03"),
                ("The Greatest Show on Earth", "24:00")
            }
        };

        // Print CD information
        Console.WriteLine(cd.GetCDInfo());
    }
}
