using System;

namespace T18StudentGoods
{
    class Item
    {
        public string Type { get; set; }
        public bool Ownership { get; set; }

        public Item() { }

        public Item(string type, bool owner)
        {
            Type = type;
            Ownership = owner;
        }

        public virtual string NeedsCharging()
        {
            return "Does not need charging\n";
        }

        public virtual string OwnerShip()
        {
            return Ownership ? "Owns" : "Borrowed";
        }

        public override String ToString()
        {
            return "";
        }
    }
    class Books : Item
    {
        public string Genre { get; set; }
        public Books(string genre, string type, bool owner)
            : base(type, owner)
        {
            Genre = genre;
        }

        public override string OwnerShip()
        {
            return Ownership ? "Owns\n" : "Borrowed\n";
        }

        public override string ToString()
        {
            return "Book: \n" + "Genre: " + Genre + "\nType: " + Type;
        }
    }
    class Electronic : Item
    {
        public bool Chargeable { get; set; }
        public Electronic() { }
        public Electronic(bool chargeable, string type, bool owner)
            : base(type, owner)
        {
            Chargeable = chargeable;
        }
        public override string NeedsCharging()
        {
            return Chargeable ? "No need to charge" : "Needs to charge";
        }
        public override string OwnerShip()
        {
            return Ownership ? "Owns\n" : "Borrowed\n";
        }
        public override string ToString()
        {
            return "Electronic: \n" + "Type:  " + Type;
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Item consoleSw = new Electronic(false, "Nintendo Switch", false);
            Item phone = new Electronic(false, "Smart phone", true);
            Item book1 = new Books("Fantasy", "Hard cover", true);
            Item book2 = new Books("Sci-fi", "Hard cover", false);
            Item book3 = new Books("Crime fiction", "Soft cover", true);

            Console.WriteLine(
                consoleSw.ToString() + "\nCharging: {0}\nOwner: {1}\n" +
                phone.ToString() + "\nCharging: {2}\nOwner: {3}\n" +
                book1.ToString() + "\nOwner: {4}\n" +
                book2.ToString() + "\nOwner: {5}\n" +
                book3.ToString() + "\nOwner: {6}",
                consoleSw.NeedsCharging(), consoleSw.OwnerShip(),
                phone.NeedsCharging(), phone.OwnerShip(),
                book1.OwnerShip(), book2.OwnerShip(), book3.OwnerShip());
            Console.ReadKey();
        }
    }
}

