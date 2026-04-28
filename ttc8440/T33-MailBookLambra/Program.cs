using Microsoft.VisualBasic;
using System.Reflection.PortableExecutable;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

namespace T33_MailBook_with_Lambda
{
    public class Friend
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public Friend(string name, string email)
        {
            Name = name;
            Email = email;
            
        }
        public override string ToString()
        {
            return $"{Name} {Email}";
        }
    }
    public class MailBook
    {
        public List<Friend> contacts = new List<Friend>();
        public string SearchFriend(string userinput)
        {
           
            var results = contacts.Where(x => x.Name.ToUpper().Contains(userinput.ToUpper()));
                return ($"\nResult count {results.Count()}\n"+ String.Join("\n",results));
        }
        public string ReadFiles()
        {
            List<string> emails = new();
            List<string> names = new List<string>();
            using (var reader = new StreamReader(@"C:\Users\Kone\Desktop\friend.csv"))
            {
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    var values = line.Split(';');


                    var name = values[0].Split(',')[0];
                    names.Add(name);

                    var email = values[0].Split(',')[1];
                    emails.Add(email);

                    contacts.Add(new Friend(name, email));
                }
            }
            return string.Join($"\n", contacts);
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            MailBook mailBook = new MailBook();
            Console.WriteLine(mailBook.ReadFiles());
            
            Console.WriteLine("\nEnter the name or part of the name of the person you are looking for: ");
            var userinput = Console.ReadLine();

            Console.WriteLine(mailBook.SearchFriend(userinput));
            
        }
    }
}