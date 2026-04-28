using System;
using System.Collections.Generic;

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
                Players.Add(new Player("Player1", "JYP", "Home", 1));
                Players.Add(new Player("Player2", "JYP", "Home", 2));
                Players.Add(new Player("Player3", "JYP", "Away", 3));
                break;
            case "Ilves":
                Players.Add(new Player("Player4", "Ilves", "Home", 4));
                Players.Add(new Player("Player5", "Ilves", "Away", 5));
                Players.Add(new Player("Player6", "Ilves", "Away", 6));
                break;
            case "Kalpa":
                Players.Add(new Player("Player7", "Kalpa", "Home", 7));
                Players.Add(new Player("Player8", "Kalpa", "Away", 8));
                Players.Add(new Player("Player9", "Kalpa", "Home", 9));
                break;
                // Add more cases for other teams
        }
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
        // create Kalpa team and display its players
        Team kalpa = new Team("Kalpa");
        Console.WriteLine("\nKalpa Players:");
        foreach (var player in kalpa.Players)
        {
            Console.WriteLine("{0} {1} ({2}) - #{3}", player.FirstName, player.LastName, player.GameLocation, player.Number);
        }
    }
}

