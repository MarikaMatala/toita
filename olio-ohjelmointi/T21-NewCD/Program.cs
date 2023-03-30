using System;
using System.Collections.Generic;

class Song
{
    public string Name { get; set; }
    public TimeSpan Length { get; set; }

    public Song(string name, TimeSpan length)
    {
        Name = name;
        Length = length;
    }
}

class CD
{
    public string Name { get; set; }
    public string Artist { get; set; }
    public IReadOnlyList<Song> Songs { get { return songs; } }
    public int NumberOfSongs { get { return songs.Count; } }
    public TimeSpan TotalLength { get { return totalLength; } }

    private List<Song> songs = new List<Song>();
    private TimeSpan totalLength = TimeSpan.Zero;

    public CD(string name, string artist)
    {
        Name = name;
        Artist = artist;
    }

    public void AddSong(string name, TimeSpan length)
    {
        Song song = new Song(name, length);
        songs.Add(song);
        totalLength += length;
    }
}

class Program
{
    static void Main(string[] args)
    {
        CD cd = new CD("Endless Forms Most Beautiful", "Nightwish");

        cd.AddSong("Shudder Before the Beautiful", TimeSpan.FromSeconds(389));
        cd.AddSong("Weak Fantasy", TimeSpan.FromSeconds(323));
        cd.AddSong("Elan", TimeSpan.FromSeconds(285));
        cd.AddSong("Yours Is an Empty Hope", TimeSpan.FromSeconds(334));
        cd.AddSong("Our Decades in the Sun", TimeSpan.FromSeconds(397));
        cd.AddSong("My Walden", TimeSpan.FromSeconds(278));
        cd.AddSong("Endless Forms Most Beautiful", TimeSpan.FromSeconds(307));
        cd.AddSong("Edema Ruh", TimeSpan.FromSeconds(315));
        cd.AddSong("Alpenglow", TimeSpan.FromSeconds(285));
        cd.AddSong("The Eyes of Sharbat Gula", TimeSpan.FromSeconds(363));
        cd.AddSong("The Greatest Show on Earth", TimeSpan.FromSeconds(1440));

        Console.WriteLine("CD Name: " + cd.Name);
        Console.WriteLine("Artist: " + cd.Artist);
        Console.WriteLine("Number of songs: " + cd.NumberOfSongs);
        Console.WriteLine("Total length: " + cd.TotalLength.ToString("g"));
        Console.WriteLine();

        Console.WriteLine("Track List:");
        for (int i = 0; i < cd.NumberOfSongs; i++)
        {
            Song song = cd.Songs[i];
            Console.WriteLine((i + 1) + ". " + song.Name + " (" + song.Length.ToString("g") + ")");
        }
    }
}

