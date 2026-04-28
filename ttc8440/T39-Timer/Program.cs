using System.Diagnostics;
using System.Threading.Tasks;
using System.Timers;
using Timer = System.Timers.Timer;

namespace T39_Timer
{
    public class AlarmTimer
    {
        public static Timer aTmr = new Timer(1000);
        public static Timer bTmr = new Timer(10000);
        public static int SecondsCount = 0;
        public static string AlarmSound = "Wake wake, the little bird";
        public void SetTimerSettings()
        {
            Console.WriteLine("Set alarm sound, or press [ENTER] to use default: 'Wake wake, the little bird.'");
            var setSound = Console.ReadLine();
            if (string.IsNullOrEmpty(setSound))
            {
                Console.WriteLine("Default alarm chosen.");
            }
            else { AlarmSound = setSound; }

            Console.WriteLine("Set timer duration: Choose first 1) Seconds, 2) Minutes");
            int unit = Convert.ToInt32(Console.ReadLine());
            if (unit == 1)
            {
                Console.WriteLine("Give timer duration in seconds");
                int duration = Convert.ToInt32(Console.ReadLine());
                SecondsCount = duration;
                Set_aTmr_Timer();
            }
            else if (unit == 2)
            {
                Console.WriteLine("Give timer duration in minutes");
                int duration = Convert.ToInt32(Console.ReadLine());
                duration = duration * 60;
                SecondsCount = duration;
                Set_bTmr_Timer();
            }

        }

        public static void Set_aTmr_Timer()
        {
            aTmr.Elapsed += ATmr_Elapsed;
            aTmr.Enabled = true;
            aTmr.AutoReset = true;
            AlarmTimer.aTmr.Start();
            Console.ReadKey();

        }
        public static void ATmr_Elapsed(object? sender, ElapsedEventArgs e)
        {
            SecondsCount--;
            Console.WriteLine(SecondsCount + " Seconds");
            if (SecondsCount == 0)
            {
                Console.WriteLine(AlarmSound);
                aTmr.Stop();
            }

            // throw new NotImplementedException();
        }
        public static void Set_bTmr_Timer()
        {
            bTmr.Elapsed += BTmr_Elapsed1;
            bTmr.Enabled = true;
            bTmr.AutoReset = true;
            bTmr.Start();
            Console.ReadKey();
        }

        private static void BTmr_Elapsed1(object? sender, ElapsedEventArgs e)
        {
            SecondsCount = SecondsCount - 10;
            Console.WriteLine(SecondsCount + " Seconds left until alarm.");
            if (SecondsCount == 0)
            {
                Console.WriteLine(AlarmSound);
                bTmr.Stop();
            }
            //throw new NotImplementedException();
        }
       
    }


    internal class Program
    {
        
        static void Main(string[] args)
        {
            AlarmTimer timer = new AlarmTimer();
            timer.SetTimerSettings();
        }
    }
}