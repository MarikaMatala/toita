using System;

public class Amplifier
{
    private readonly int maxVol = 100;
    private readonly int minVol = 0;
    private const string high = "Too much volume, volume is set to maximum: 100";
    private const string low = "Too low volume, volume is set to minimum: 0";
    private int volume;

    public int Volume
    {
        get
        {
            return volume;
        }
        set
        {
            if (value > maxVol)
            {
                volume = maxVol;
                Console.WriteLine(high);
            }
            else if (value < minVol)
            {
                volume = minVol;
                Console.WriteLine(low);
            }
            else
            {
                volume = value;
            }
        }
    }

    public Amplifier()
    {
        volume = 10;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Amplifier amplifier = new Amplifier();

        while (true)
        {
            Console.Write("Give a new volume value (0 - 100): ");
            amplifier.Volume = int.Parse(Console.ReadLine());
            Console.WriteLine("Amplifier is set to " + amplifier.Volume);
        }
    }
}





