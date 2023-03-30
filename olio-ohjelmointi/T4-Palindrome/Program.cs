using System;

namespace T4Palindrome
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a sentence or word: ");
            string input = Console.ReadLine();

            if (IsPalindrome(input))
            {
                Console.WriteLine("The string is a palindrome.");
            }
            else
            {
                Console.WriteLine("The string is not a palindrome.");
            }
        }

        static bool IsPalindrome(string input)
        {
            input = input.ToLower().Replace(" ", "");

            int length = input.Length;
            for (int i = 0; i < length / 2; i++)
            {
                if (input[i] != input[length - i - 1])
                {
                    return false;
                }
            }

            return true;
        }
    }
}
