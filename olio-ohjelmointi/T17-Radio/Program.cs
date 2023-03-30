using System;

namespace Radio
{
    class Radio
    {
        public readonly int MAX_VOLUME = 9;
        public readonly int MIN_VOLUME = 0;
        public readonly double MIN_FREQUENCY = 2000.0;
        public readonly double MAX_FREQUENCY = 26000.0;
        private float frequency;
        private bool radioIsOn = false;
        private int volume;

        public float Frequency
        {
            get { return frequency; }
            set
            {
                frequency = value;
            }
        }
        public bool RadioIsOn
        {
            get { return radioIsOn; }
            set { radioIsOn = value; }
        }
        public int Volume
        {
            get
            {
                return volume;
            }
            set
            {
                volume = value;
            }
        }
        public Radio()
        {
            radioIsOn = false;
            frequency = (float)2000.0;
            volume = 5;
        }
        public void RadioOnOff(bool offOn)
        {
            radioIsOn = offOn;
        }
        public void ChangeChannel(double cChannel)
        {
            if (radioIsOn)
            {
                if (cChannel <= MAX_FREQUENCY && cChannel >= MIN_FREQUENCY)
                {
                    frequency = (float)cChannel;
                }
            }
        }
        public void ChangeVolume(int newVolume)
        {
            if (radioIsOn)
            {
                if (newVolume < MAX_VOLUME && newVolume > MIN_VOLUME)
                {
                    volume = newVolume;
                }
            }
        }
        public override string ToString()
        {
            return "Radio values: Frequency " + Frequency + " Volume " + Volume;
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Radio radio = new Radio();
            Console.WriteLine("Turn radio on. y / n");
            char answer = char.Parse(Console.ReadLine());

            if (Char.ToLower(answer) == 'y')
            {
                radio.RadioOnOff(true);
                Console.WriteLine(radio.ToString());
            }
            RadioChoises(radio);
            Console.ReadKey();
        }

        private static void RadioChoises(Radio radio)
        {
            do
            {
                Console.WriteLine("Change channel: c, Change volume: v, Turn radio off: x");
                char choise = char.Parse(Console.ReadLine());

                switch (Char.ToLower(choise))
                {
                    case 'c':
                        Console.WriteLine("Choose channel between {0} and {1}", radio.MIN_FREQUENCY, radio.MAX_FREQUENCY);
                        radio.ChangeChannel(double.Parse(Console.ReadLine()));
                        Console.WriteLine(radio.ToString());
                        break;

                    case 'v':
                        Console.WriteLine("Change volume between {0} and {1}", radio.MIN_VOLUME, radio.MAX_VOLUME);
                        radio.ChangeVolume(int.Parse(Console.ReadLine()));
                        Console.WriteLine(radio.ToString());
                        break;

                    case 'x':
                        Console.WriteLine("Shutting down..");
                        radio.RadioOnOff(false);
                        break;

                    default:
                        Console.WriteLine("Choose c, v or e");
                        break;
                }
            } while (radio.RadioIsOn);
        }
    }
}
