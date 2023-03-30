using System;
using System.Collections.Generic;

public interface ITransaction
{
    // interface members
    string ShowTransaction();
    float Money { get; set; }
}

public class PaidWithCash : ITransaction
{
    private static float CashInRegister = 0;
    private static int BillNumber = 0;
    private float money;

    public PaidWithCash(float money)
    {
        this.money = money;
        CashInRegister += money;
        BillNumber++;
    }

    public string ShowTransaction()
    {
        return $"Paid with cash: bill number {BillNumber} date {DateTime.Today.ToString("d")} amount {money:0.00} Euros";
    }

    public float Money
    {
        get { return money; }
        set { money = value; }
    }

    public static float ShowCash()
    {
        return CashInRegister;
    }
}

public class PaidWithCard : ITransaction
{
    private static List<PaidWithCard> Transactions = new List<PaidWithCard>();
    private float money;

    public PaidWithCard(float money)
    {
        this.money = money;
        Transactions.Add(this);
    }

    public string ShowTransaction()
    {
        return $"Transaction to bank: charge from card {Transactions.Count:0000}-{DateTime.Today.ToString("MMdd")} date {DateTime.Today.ToString("d")} amount {money:0.00} Euros";
    }

    public float Money
    {
        get { return money; }
        set { money = value; }
    }

    public static float ShowTotal()
    {
        float total = 0;
        foreach (PaidWithCard transaction in Transactions)
        {
            total += transaction.Money;
        }
        return total;
    }
}

class Program
{
    static void Main(string[] args)
    {
        PaidWithCard card1 = new PaidWithCard(78.95f);
        PaidWithCard card2 = new PaidWithCard(45.65f);

        Console.WriteLine(card1.ShowTransaction());
        Console.WriteLine(card2.ShowTransaction());
        Console.WriteLine($"Total money at bank account: {PaidWithCard.ShowTotal():0.00}");

        PaidWithCash cash1 = new PaidWithCash(100);
        PaidWithCash cash2 = new PaidWithCash(50);

        Console.WriteLine(cash1.ShowTransaction());
        Console.WriteLine(cash2.ShowTransaction());
        Console.WriteLine($"Total money in cash: {PaidWithCash.ShowCash():0.00}");

        float totalSales = PaidWithCard.ShowTotal() + PaidWithCash.ShowCash();
        Console.WriteLine($"Total sales today {DateTime.Today.ToString("dddd MMMM d, yyyy")} is {totalSales:0.00} :");

        Console.WriteLine("Program completed successfully. Press any key to quit.");
        Console.ReadKey();
    }
}
