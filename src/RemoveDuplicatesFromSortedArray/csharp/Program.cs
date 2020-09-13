using System;
using System.Linq;

namespace RemoveDuplicatesFromSortedArray
{
    class Program
    {
        static int Main(string[] args)
        {
            if(args.Length > 0 && (args[0] == "?" || args[0] == "help" || args[0] == "-h")) {
                Console.Out.WriteLine(@"Read readme file for usage.");
                return 1;
            }

            var arrInput = Console.In.ReadLine().Trim();
            if(!arrInput.StartsWith("[") || !arrInput.EndsWith("]")){
                Console.Out.WriteLine(@"Incorrect command line parameters.
Array of integers inspected in a form: [1,2,3,4].");
                return 2;
            }

            arrInput = arrInput.Substring(1, arrInput.Length - 2);
            var arrData = arrInput.Split(",").Select(x => Convert.ToInt32(x)).ToArray();
            for(var i = 1; i < arrData.Length; i++) {
                if(arrData[i-1] > arrData[i]) {
                    Console.Out.WriteLine("Input array should be sotted!");
                    return 3;
                }
            }

            var solution = new Solution();
            var result = solution.RemoveDuplicates(arrData);
            Console.Out.WriteLine("[{0}]", string.Join(",", result));

            return 0;
        }
    }
}
