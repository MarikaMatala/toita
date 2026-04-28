using System;

namespace T8Television
{
    public class Television
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Channel { get; set; }
        public string ChannelToString(int channelNumber)
        {
            string channel = "";
            switch (channelNumber)
            {
                case 1:
                    channel = "Yle TV1";
                    break;
                case 2:
                    channel = "Yle TV2";
                    break;
                case 3:
                    channel = "MTV3";
                    break;
            }
            return channel;
        }
        public string DisplayInfo()
        {
            return $"Viewing {Channel} {Brand} {Model} television";
        }
        public Television(string brand, string model, string channel)
        {
            this.Brand = brand;
            this.Model = model;
            this.Channel = channel;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Television television = new Television("Samsung", "Q60B 4K QLED", "Yle TV1");
            int i = 1;

            Console.Write("Enter 1 to view the channel list, 0 to power off: ");
            int channelList = int.Parse(Console.ReadLine());

            if (channelList == 1)
            {
                while (i == 1)
                {
                    Console.WriteLine("Channel is {0}", television.Channel);
                    Console.WriteLine("------------------------");
                    Console.WriteLine("Channel list:");
                    Console.WriteLine("1. Yle TV1");
                    Console.WriteLine("2. Yle TV2");
                    Console.WriteLine("3. MTV3");
                    Console.WriteLine("------------------------");
                    Console.WriteLine("Change the channel: ");
                    int channelNumber = int.Parse(Console.ReadLine());
                    television.Channel = television.ChannelToString(channelNumber);
                    Console.WriteLine("------------------------");

                    Console.WriteLine(television.DisplayInfo());
                    Console.WriteLine("------------------------");
                    Console.WriteLine("Switch channels? 1 is yes and 0 is no.");
                    int channelSwitch = int.Parse(Console.ReadLine());
                    Console.WriteLine("------------------------");

                    if (channelSwitch == 1)
                    {
                        i++;
                        i--;
                    }
                    else
                    {
                        i--;
                    }
                }
            }
            else
            {
                Console.WriteLine("Powered off");
            }
        }
    }
}
