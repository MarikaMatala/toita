using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Give points: ");
        string input = Console.ReadLine();

        int score;
        bool isValid = int.TryParse(input, out score);

        if (isValid)
        {
            int grade = 0;
            if (score >= 20 && score <= 29)
            {
                grade = 1;
            }
            else if (score >= 30 && score <= 39)
            {
                grade = 2;
            }
            else if (score >= 40 && score <= 49)
            {
                grade = 3;
            }
            else if (score >= 50 && score <= 59)
            {
                grade = 4;
            }
            else if (score >= 60 && score <= 70)
            {
                grade = 5;
            }
            Console.WriteLine("Your grade is: " + grade);
        }
        else
        {
            Console.WriteLine("Error: Invalid input. Please enter a number.");
        }
    }
}
