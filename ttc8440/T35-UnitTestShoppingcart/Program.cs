using Microsoft.VisualBasic;

namespace T35_Unit_Test_Shopping_cart
{
    public class Product
    {
        public string Name { get; set; }
        public float Price { get; set; }
        public Product(string name, float price)
        {
            Name = name;
            Price = price;
        }
        public override string ToString()
        {
            return $"{Name} {Price}e";
        }
    }
    public class ShoppingCart
    {
        public List<Product>products = new List<Product>();
        public string ShowProducts()
        {
            Console.WriteLine("Your products in Shopping Cart:\n");

            products.Add(new Product("Milk", 1.4F));
            products.Add(new Product("Bread", 2.2F));
            products.Add(new Product("Butter", 3.2F));
            products.Add(new Product("Cheese", 4.2F));

            double Total = products.Sum(item => item.Price);
            var msg = $"There are {products.Count} products in the shopping cart, total cost: {Total}e";

            foreach (var product in products)
                Console.WriteLine($"- Product: {product}");
            return msg;

        }

    }
    internal class Program
    {
        static void Main(string[] args)
        {
            ShoppingCart cart = new ShoppingCart();
            Console.WriteLine(cart.ShowProducts());
        }
    }
}