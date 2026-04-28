using System.Security.Cryptography.X509Certificates;

namespace T38_Wooden_Window
{
    public class Window
    {
        public double Area { get; set; }
        public double Circumference { get; set; }
        public double Glass { get; set; }
        public double Wood { get; set; }
        public double Height { get; set; }
        public double Width { get; set; }
        public void CalcArea()
        {
            Area = Height * Width;
            Console.WriteLine($"Window Area is: {Area}cm\u00b2");
        }
        public void CalcCircumference()
        {
            Circumference = Math.Round(2 * (Height + Width),4);
            Console.WriteLine($"Needed wood (circumference of window): {Circumference}cm");
        }
        public void CalcNeededGlass()
        {
            Glass = Math.Round((Area * 3 * 0.0001),4);
            Console.WriteLine($"Total glass needed: {Glass}m\u00b2");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Window window = new();

            Console.WriteLine("Give window height in centimers: ");
            window.Height = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Give window width in centimeters: ");
            window.Width = Convert.ToDouble(Console.ReadLine());

            window.CalcArea();
            window.CalcCircumference();
            window.CalcNeededGlass();
        }
    }
}