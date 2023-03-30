using System;
using System.Collections.Generic;
using System.IO;

public class Player
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string GameLocation { get; set; }
    public int Number { get; set; }

    public Player(string firstName, string lastName, string gameLocation, int number)
    {
        FirstName = firstName;
        LastName = lastName;
        GameLocation = gameLocation;
        Number = number;
    }
}

public class Team
{
    public string Name { get; set; }
    public string Hometown { get; set; }
    public List<Player> Players { get; set; }

    public Team(string name)
    {
        Name = name;
        Hometown = ""; //default value, can be updated later
        Players = new List<Player>();

        switch (Name)
        {
            case "JYP":
                Players.Add(new Player("Jarkko", "Immonen", "center", 26));
                Players.Add(new Player("Brad", "Lambert", "forward", 16));
                break;
            case "Ilves":
                Players.Add(new Player("Player4", "Ilves", "Home", 4));
                Players.Add(new Player("Player5", "Ilves", "Away", 5));
                Players.Add(new Player("Player6", "Ilves", "Away", 6));
                break;
                // Add more cases for other teams
        }
    }

    public void SavePlayersToCSV()
    {
        string fileName = Name + ".csv";

        using (StreamWriter writer = new StreamWriter(fileName))
        {
            foreach (Player player in Players)
            {
                writer.WriteLine(player.FirstName + ";" + player.LastName + ";" + player.GameLocation + ";" + player.Number);
            }
        }

        Console.WriteLine("Players saved to " + fileName);
    }
}

class Program
{
    static void Main(string[] args)
    {
        // create JYP team and display its players
        Team jyp = new Team("JYP");
        Console.WriteLine("JYP Players:");
        foreach (var player in jyp.Players)
        {
            Console.WriteLine("{0} {1} ({2}) - #{3}", player.FirstName, player.LastName, player.GameLocation, player.Number);
        }

        // create Ilves team and display its players
        Team ilves = new Team("Ilves");
        Console.WriteLine("\nIlves Players:");
        foreach (var player in ilves.Players)
        {
            Console.WriteLine("{0} {1} ({2}) - #{3}", player.FirstName, player.LastName, player.GameLocation, player.Number);
        }

        // save JYP players to CSV file
        jyp.SavePlayersToCSV();

        // save Ilves players to CSV file
        ilves.SavePlayersToCSV();
    }
}

