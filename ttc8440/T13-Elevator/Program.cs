using System;

namespace ElevatorController
{
    public class Elevator
    {
        private int currentFloor = 1;

        public int CurrentFloor
        {
            get { return currentFloor; }
            set { currentFloor = value; }
        }

        public bool GoTo(int floor, out string message)
        {
            if (floor < 1)
            {
                message = "Floor is too small!";
                return false;
            }
            else if (floor > 5)
            {
                message = "Floor is too big!";
                return false;
            }
            else
            {
                CurrentFloor = floor;
                message = $"Elevator is now in floor : {CurrentFloor}";
                return true;
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Elevator elevator = new Elevator();

            Console.WriteLine($"Elevator is now in floor : {elevator.CurrentFloor}");

            while (true)
            {
                Console.Write("Give a new floor number (1-5) > ");
                string input = Console.ReadLine();

                if (int.TryParse(input, out int floor))
                {
                    string message;
                    if (elevator.GoTo(floor, out message))
                    {
                        Console.WriteLine(message);
                    }
                    else
                    {
                        Console.WriteLine(message);
                    }
                }
                else
                {
                    Console.WriteLine("Invalid input!");
                }
            }
        }
    }
}
