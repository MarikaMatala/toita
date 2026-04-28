namespace T32_Delegate
{
    
    public class StringChanger
    {
        public delegate void StringEditor(string logMessage);
        public StringEditor WriteToLog { get; set; }
        public void RunDelegate(string userString)
        {
            WriteToLog(userString);
        }
    }
    public class TestBench
    {
        public static void TestProgram(string userString, string numbers)
        {
            StringChanger logger = new();

            if (!numbers.Contains("0"))
            {
                if (numbers.Contains("1"))
                {
                    logger.WriteToLog += ToUpperCase;
                }
                if (numbers.Contains("2"))
                {
                    logger.WriteToLog += ToLowerCase;
                }
                if (numbers.Contains("3"))
                {
                    logger.WriteToLog += Capitalize;
                }
                if (numbers.Contains("4"))
                {
                    logger.WriteToLog += Palidromize;
                }
                logger.RunDelegate(userString);
            }

        }
        static void ToUpperCase(string text)
        {
            string newtext = text.ToUpper();
            Console.WriteLine(text + " changed to " + newtext);
        }
        static void ToLowerCase(string text)
        {
            string newtext = text.ToLower();
            Console.WriteLine(text + " changed to " + newtext);
        }
        static void Capitalize(string text)
        {
            string newtext = text[0].ToString().ToUpper() + text.Substring(1);
            Console.WriteLine(text + " changed to " + newtext);
        }
        static void Palidromize(string text)
        {
            char[] charArray = text.ToCharArray();
            Array.Reverse(charArray);
            string newtext = new string(charArray);
            Console.WriteLine(text + " changed to " + newtext);
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Enter the string to process:");
                string input = Console.ReadLine();

                Console.WriteLine("Choose the treatment you want, you can give several treatments at once\r\nas one string, e.g. '123'\r\n");
                Console.WriteLine("1: to capital letters\r\n2: lowercase\r\n3: as a title\r\n4: as a palindrome\r\n0: termination\r\n");
                Console.Write("Selection: ");
                string numbers = Console.ReadLine();
                TestBench.TestProgram(input, numbers);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Sorry, there was an error: {ex.Message}");
            }
        }
    }
}
