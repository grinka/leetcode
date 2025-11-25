# 66. Plus One

- [Original Problem](https://leetcode.com/problems/plus-one/description/)
- [Solution](#solution)
  - [C#](#c)

## Problem
**Complexity: Easy**

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `i`th digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return the resulting array of digits.

### Example 1:

> **Input:** digits = [1,2,3]\
> **Output:** [1,2,4]\
> **Explanation:** The array represents the integer 123.\
> Incrementing by one gives 123 + 1 = 124.\
> Thus, the result should be [1,2,4].

### Example 2:

> **Input:** digits = [4,3,2,1]\
> **Output:** [4,3,2,2]\
> **Explanation:** The array represents the integer 4321.\
> Incrementing by one gives 4321 + 1 = 4322.\
> Thus, the result should be [4,3,2,2].

### Example 3:

> **Input:** digits = [9]\
> **Output:** [1,0]\
> **Explanation:** The array represents the integer 9.\
> Incrementing by one gives 9 + 1 = 10.\
> Thus, the result should be [1,0].
 
### Constraints:

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` does not contain any leading `0`'s.

## Solution
### C#

[Top](#66-plus-one) | [Problem](#problem)

```csharp
public class Solution {
    public int[] PlusOne(int[] digits) {
        var result = new int[digits.Length];
        var shift = 1;
        for(var i = digits.Length - 1; i >= 0; i--) {
            result[i] = digits[i] + shift;
            Console.WriteLine($"Result[{i}] == {result[i]}");
            if(result[i] >= 10) {
                result[i] = result[i] - 10;
                shift = 1;
                Console.WriteLine($"Bigger value. After adjusting: {result[i]}");
            } else {
                shift = 0;
            }
            
            if(shift == 0) {
                Console.WriteLine("shift is 0, time to fill the result");
                for(var j = 0; j < i; j++) {
                    result[j] = digits[j];
                }
                break;
            }
        }
        if(shift > 0) {
            var biggerResult = new int[digits.Length +1];
            biggerResult[0] = 1;
            for(var i = 0; i < result.Length; i++) {
                biggerResult[i+1] = result[i];
            }
            return biggerResult;
        } else {
            return result;
        }
    }
}
```
