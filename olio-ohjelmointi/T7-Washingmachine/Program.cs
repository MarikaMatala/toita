using System;
using System.Reflection.Emit;
using System.Runtime.CompilerServices;

namespace T7WashingMachine
{
    public class WashingMachine
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public bool Power { get; set; }
        public string Program { get; set; }
        public string ProgramIntoString(int programNumber)
        {
            string program = "";
            switch (programNumber)
            {
                case 1:
                    program = "slow";
                    break;
                case 2:
                    program = "fast";
                    break;
                case 3:
                    program = "sensitive";
                    break;
                case 4:
                    program = "eco";
                    break;
            }
            return program;
        }
        public bool PowerBool(string onOff)
        {
            if (onOff == "on")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public string PowerIndicator(string onOff)
        {
            if (onOff == "on")
            {
                return "Washing machine is powered on";
            }
            else
            {
                return "Washing machine is powered off";
            }

        }

        public WashingMachine(string brand, string model)
        {
            this.Brand = brand;
            this.Model = model;
        }
        public WashingMachine(string brand, string model, string program)
        {
            this.Brand = brand;
            this.Model = model;
            this.Program = program;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            WashingMachine machine1 = new WashingMachine("LG", "WKHC202HBA");

            Console.Write("Use {0} {1} washing machine. Enter on or enter off: ", machine1.Brand, machine1.Model);
            string onOff = Console.ReadLine();
            machine1.Power = machine1.PowerBool(onOff);

            if (onOff == "on")
            {
                machine1.Power = machine1.PowerBool(onOff);
                Console.WriteLine(machine1.PowerIndicator(onOff));

                Console.WriteLine("Please select a program: ");
                Console.WriteLine("1. Slow");
                Console.WriteLine("2. Fast");
                Console.WriteLine("3. Sensitive");
                Console.WriteLine("4. Eco");
                Console.Write("Enter program: ");
                int programNumber = int.Parse(Console.ReadLine());
                machine1.Program = machine1.ProgramIntoString(programNumber);

                Console.WriteLine("Your {0} {1} is powered on with the {2} program", machine1.Brand, machine1.Model, machine1.Program);
                Console.WriteLine("------------------------");
                Console.WriteLine("Would you like to run your other washing machine with the same program?");
                Console.Write("Type yes or no: ");
                string input = Console.ReadLine();

                if (input == "yes")
                {
                    WashingMachine machine2 = new WashingMachine(machine1.Brand, machine1.Model, machine1.Program);
                    Console.WriteLine("------------------------");
                    Console.WriteLine("Your second {0} {1} is powered on with the {2} program", machine2.Brand, machine2.Model, machine2.Program);
                    Console.WriteLine("You have two washing machines running");
                }
                else
                {
                    Console.WriteLine("------------------------");
                    Console.WriteLine("You have one washing machine running");
                }


            }
            else if (onOff == "off")
            {
                Console.WriteLine(machine1.PowerIndicator(onOff));
            }
            else
            {
                Console.WriteLine("Please input either on or off");
            }
        }
    }
}


