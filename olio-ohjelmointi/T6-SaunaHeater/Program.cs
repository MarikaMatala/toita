using System;

namespace T6SaunaHeater
{
    public class Sauna
    {
        bool status = false;
        int temperature = 0;
        int humidity = 0;
        public bool Status
        {
            get { return status; }
            set { status = value; }
        }
        public int Temperature
        {
            get { return temperature; }
            set { temperature = value; }
        }
        public int Humidity
        {
            get { return humidity; }
            set { humidity = value; }
        }
        public string CurrentSettings()
        {
            return $"\nSauna is turned on: {Status}. \nTarget temperature is: {temperature} celsius degrees. \nHumidity is set to: {humidity}%";
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = MainMenu();
            }
        }
        private static bool MainMenu()
        {

            Console.Clear();
            Sauna sauna = new Sauna();
            Console.WriteLine($"{sauna.CurrentSettings()}");

            Console.WriteLine("\r\nChoose an option:");
            Console.WriteLine("1) Turn on Sauna");
            Console.WriteLine("2) Exit");
            Console.Write("\r\nSelect an option: ");


            switch (Console.ReadLine())
            {
                case "1":
                    SaunaOn();
                    return true;
                case "2":
                    return false;
                default:
                    return true;
            }
        }

        public static string CaptureInput()
        {
            Sauna sauna = new Sauna();
            sauna.Status = true;
            return Console.ReadLine();
        }

        private static void SaunaOn()
        {
            Console.Clear();
            Sauna sauna = new Sauna();
            sauna.Status = true;
            Console.WriteLine($"{sauna.CurrentSettings()}");

            Console.WriteLine("Set target temperature (40-120) Celsius Degrees: ");
            int temp = Convert.ToInt32(Console.ReadLine());
            while (temp < 40 || temp > 120)
            {
                Console.WriteLine("Value not in defined range, please set temperature again: ");
                temp = Convert.ToInt32(Console.ReadLine());
            }

            sauna.Temperature = temp;

            Console.WriteLine("Set target humidity (0-100%): ");
            int humid = Convert.ToInt32(Console.ReadLine());
            while (humid > 100)
            {
                Console.WriteLine("Value not in defined range, please set humidity again: ");
                humid = Convert.ToInt32(Console.ReadLine());
            }

            sauna.Humidity = humid;

            DisplayResult($"{sauna.CurrentSettings()}");
        }

        private static void DisplayResult(string message)
        {
            Console.WriteLine($"\r\n{message}");
            Console.Write("\r\nPress Enter to power off sauna and return to Main Menu");
            Console.ReadLine();
        }
    }
}

