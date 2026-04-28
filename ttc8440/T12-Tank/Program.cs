using System;

class Tank
{
    // Properties
    private string name;
    private string type;
    private int crewNumber = 4;
    private float speed = 0f;
    private readonly float speedMax = 100f;

    // Constructors
    public Tank(string name, string type)
    {
        this.name = name;
        this.type = type;
    }

    // Name property
    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    // Type property
    public string Type
    {
        get { return type; }
        set { type = value; }
    }

    // CrewNumber property
    public int CrewNumber
    {
        get { return crewNumber; }
        set
        {
            if (value >= 2 && value <= 6)
            {
                crewNumber = value;
            }
        }
    }

    // Speed property
    public float Speed
    {
        get { return speed; }
    }

    // SpeedMax property
    public float SpeedMax
    {
        get { return speedMax; }
    }

    // AccelerateTo method
    public void AccelerateTo(float speed)
    {
        if (speed >= 0 && speed <= speedMax)
        {
            this.speed = speed;
        }
    }

    // SlowTo method
    public void SlowTo(float speed)
    {
        if (speed >= 0 && speed <= speedMax)
        {
            this.speed = speed;
        }
    }
}

class TestTank
{
    static void Main(string[] args)
    {
        Tank tank = new Tank("M1 Abrams", "Main Battle Tank");

        Console.WriteLine($"Tank name: {tank.Name}");
        Console.WriteLine($"Tank type: {tank.Type}");
        Console.WriteLine($"Crew number: {tank.CrewNumber}");
        Console.WriteLine($"Current speed: {tank.Speed}");

        Console.WriteLine("\nAccelerating...");
        tank.AccelerateTo(50f);
        Console.WriteLine($"Current speed: {tank.Speed}");

        Console.WriteLine("\nSlowing down...");
        tank.SlowTo(25f);
        Console.WriteLine($"Current speed: {tank.Speed}");

        Console.WriteLine("\nTrying to set invalid crew number...");
        tank.CrewNumber = 10;
        Console.WriteLine($"Crew number: {tank.CrewNumber}");

        Console.WriteLine("\nSetting valid crew number...");
        tank.CrewNumber = 6;
        Console.WriteLine($"Crew number: {tank.CrewNumber}");
    }
}
