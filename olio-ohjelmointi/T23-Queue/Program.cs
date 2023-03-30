using System;
using System.Collections;

interface ICheckoutQueue
{
    void GoToQueue(object customer);
    object ExitQueue();
    int Length { get; }
}

class CheckoutQueue : ICheckoutQueue
{
    private Queue queue = new Queue();

    public void GoToQueue(object customer)
    {
        queue.Enqueue(customer);
        Console.WriteLine($"Customer {customer} joined the queue.");
    }

    public object ExitQueue()
    {
        if (queue.Count == 0)
        {
            Console.WriteLine("The queue is empty.");
            return null;
        }

        object customer = queue.Dequeue();
        Console.WriteLine($"Customer {customer} left the queue.");
        return customer;
    }

    public int Length
    {
        get { return queue.Count; }
    }
}

class Program
{
    static void Main(string[] args)
    {
        ICheckoutQueue checkoutQueue = new CheckoutQueue();

        checkoutQueue.GoToQueue("Alice");
        checkoutQueue.GoToQueue("Bob");
        checkoutQueue.GoToQueue("Charlie");

        Console.WriteLine($"Queue length: {checkoutQueue.Length}");

        checkoutQueue.ExitQueue();
        checkoutQueue.ExitQueue();

        Console.WriteLine($"Queue length: {checkoutQueue.Length}");

        checkoutQueue.ExitQueue();
        checkoutQueue.ExitQueue();
    }
}

