namespace T36_Invoice
{
    public class Item
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public double Total { get; set; }
        public Item(string name, double price, int quantity, double total) {
            Name = name; 
            Price = price;
            Quantity = quantity;
            Total = Price * Quantity;
        }
        public override string ToString()
        {
            return $"- {Name} {Price}e {Quantity}pcs {Total}e total";
        }
    }
    public class Customer
    {
        public string Fname { get; set; }
        public string Lname { get; set; }
        public Customer(string fname,string lname)
        {
            Fname = fname;
            Lname = lname;
        }
        public override string ToString()
        {
            return $"{Fname} {Lname}";
        }

    }
    public class InvoiceItem
    {
        public string Customer { get; set; }
        public List<Item> Items = new List<Item>();
        public List<Customer> Customers = new List<Customer>();
        public int ItemsCount { get; set; }
        public int ItemsTogether { get; set; }
        public double CountTotal { get; set; }
        public string PrintInvoice()
        {
            Console.WriteLine($"Customer: {Customer}'s invoice:");
            Console.WriteLine("==========================================");

            foreach (var item in Items)
                Console.WriteLine(item);

            Console.WriteLine("==========================================");

            var msg = $"Total: {ItemsCount} items, {ItemsTogether} pieces {CountTotal} euros";
            return msg;
        }
        public void CountInvoiceTotal()
        {
            ItemsCount = Items.Count;
            ItemsTogether = Items.Sum(item => item.Quantity);
            CountTotal = Math.Round(Items.Sum(item => item.Total), 4);
        }
       
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            InvoiceItem invoice1 = new();
            invoice1.Customer = "Kirsi Kernel";

            invoice1.Items.Add(new Item("Milk", 1.15, 4, default));
            invoice1.Items.Add(new Item("Coca-Cola", 2.70, 1, default));
            invoice1.Items.Add(new Item("Coffee beans", 12, 1, default));
            invoice1.Items.Add(new Item("Ham", 3.45, 2, default));

            invoice1.CountInvoiceTotal();

            Console.WriteLine(invoice1.PrintInvoice());


        }
    }
}
