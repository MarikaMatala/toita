using System;

public class ElectricalDevice
{
    public bool On { get; set; }
    public float Power { get; set; }
}

public class PortableRadio : ElectricalDevice
{
    private int volume;
    private float frequency;

    public int Volume
    {
        get { return volume; }
        set
        {
            if (On)
            {
                volume = value;
            }
            else
            {
                throw new Exception("Radio must be turned on before setting volume.");
            }
        }
    }

    public float Frequency
    {
        get { return frequency; }
        set
        {
            if (On)
            {
                if (value >= 2000.0f && value <= 26000.0f)
                {
                    frequency = value;
                }
                else
                {
                    throw new Exception("Frequency must be between 2000.0 and 26000.0.");
                }
            }
            else
            {
                throw new Exception("Radio must be turned on before setting frequency.");
            }
        }
    }

    public override string ToString()
    {
        return $"On: {On}, Power: {Power} watts, Volume: {Volume}, Frequency: {Frequency} Hz";
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        PortableRadio radio = new PortableRadio();
        radio.On = true;
        radio.Power = 5.0f;

        Console.WriteLine(radio.ToString());

        radio.Volume = 3;
        radio.Frequency = 10500.0f;

        Console.WriteLine(radio.ToString());

        radio.On = false;
        radio.Volume = 6; // Should throw exception
    }
}


