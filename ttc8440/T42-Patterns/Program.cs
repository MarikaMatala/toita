using System.Transactions;

namespace T42_Patterns
{
    public abstract class Shape
    {
        public string Name;
        public abstract double GetArea();
        public abstract double GetCircumference();
        public List<Shape> Shapes = new();
    }
    public class Circle : Shape
    {
        public string Name { get; set; }
        public int radius;
        private double Area { get; set; }
        private double Circumference { get; set; }
        public Circle(int n,string s)
        {
            radius = n;
            Name = s;
            Area = GetArea();
            Circumference = GetCircumference();
        } 
        public override double GetArea()
        {
            Area = Math.PI * Math.Pow(radius, 2);
            return Math.Round(Area,2);
        }
        public override double GetCircumference()
        {
           Circumference = 2 * Math.PI * radius;
            return Circumference;
        }
        public override string ToString()
        {
            return $"{Name} Radius:{radius} Area:{Math.Round(Area,2)} Circumference:{Math.Round(Circumference,2)}";
        }
    }
    public class Rectancle : Shape
    {
        public string Name { get; set; }
        public double Length;
        public double Width;
        private double Area { get; set; }
        private double Circumference { get; set; }
        public Rectancle(int w, int l, string s)
        {
            Width = w;
            Length = l;
            Name = s;
            Area= GetArea();
            Circumference= GetCircumference();
        }
        public override double GetArea()
        {
            Area = Width * Length;
            return Area;
        }
        public override double GetCircumference()
        {
            Circumference = 2 * (Length + Width);
            return Circumference;
        }
        public override string ToString()
        {
            return $"{Name} Width:{Math.Round(Width, 2)} Length:{Math.Round(Length,2)}  Area:{Math.Round(Area,2)} Circumference:{Math.Round(Circumference, 2)}";
        }
    }
    
    internal class Program
    {
        static void Main(string[] args)
        {
            Circle circle = new(1, "Circle");
            Circle circle1 = new(2, "Circle");
            Circle circle2 = new(3, "Circle");
            
            circle.Shapes.Add(circle);
            circle.Shapes.Add(circle1);
            circle.Shapes.Add(circle2);


            Rectancle rect = new(10, 20, "Rectangle");
            Rectancle rect1 = new(20, 30, "Rectangle");
            Rectancle rect2 = new(40, 50, "Rectangle");

            circle.Shapes.Add(rect);
            circle.Shapes.Add(rect1);
            circle.Shapes.Add(rect2);

            foreach (Shape shape in circle.Shapes)
                Console.WriteLine(shape);
        }
    }
}