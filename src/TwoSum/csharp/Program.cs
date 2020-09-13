using System;
using System.Linq;

namespace TwoSum
{
    class Program
    {
        static int Main(string[] args)
        {
            if(args.Length > 0 && (args[0] == "?" || args[0] == "help" || args[0] == "-h")) {
                Console.WriteLine(@"Read readme file for usage.");
                return 1;
            }

            var arrInput = Console.In.ReadLine();
            var targetInput = Console.In.ReadLine();
            var srcArray = parseArr(arrInput);

            var solution = new Solution();
            var result = solution.TwoSum(srcArray, Convert.ToInt32(targetInput));

            Console.Out.WriteLine("[{0}]", string.Join(",", result));
            return 0;
        }

        private static int[] parseArr(string arrInput) {
            if(arrInput.StartsWith("[") && arrInput.EndsWith("]")) {
                arrInput = arrInput.Substring(1, arrInput.Length - 2);
                var splitted = arrInput.Split(",").Select(x => Convert.ToInt32(x)).ToArray();
                return splitted;
            } else {
                throw new Exception("Incorrect input array format. Please read readme.md file.");
            }
        }
    }
}
