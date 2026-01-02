# 66. Plus One

- [Original Problem](https://leetcode.com/problems/plus-one/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
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

### Javascript
**Runtime: 0ms, Beats: 100%**

[Top](#66-plus-one) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript |
    [C#](#c)
</small>)

#### Intuition
In best case we need to increment only one number in the last array cell. If it's 9, then we need to set it to 0 and try to increment previous one. Repeat this operation until number in the cell is less than 9. If all numbers equal to 9, then we need to set them all to 0 and append 1 at the beginning. To avoid shifting all cells of the array to the right, we can set the first element to 1 and append 0 at the end - result will be the same.

#### Approach
1. Set indexer to the last element of the array
2. Loop while indexer is greater or equals to 0
   - if number in the array cell is 9, set it to the 0 and decrement indexer - we need to increment one more digit
   - else, increment the number in the cell and return the array
3. If loop is over and we're still here, it means, all the numbers in the array are 9 and we set them all to 0
4. Set first number to the 1 and append 0 to the end
5. Return the array

#### Complexity
- **Time complexity:** O(n)
- **Space complexity:** O(1)

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    while(i >= 0) {
        if(digits[i] === 9) {
            digits[i] = 0;
            i--;
        } else {
            digits[i]++;
            return digits;
        }
    }

    digits[0] = 1;
    digits.push(0);
    return digits;
};
```

### C#

[Top](#66-plus-one) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript](#javascript) |
    C#
</small>)

```csharp
public class Solution {
    public int[] PlusOne(int[] digits) {
        var result = new int[digits.Length];
        var shift = 1;
        for(var i = digits.Length - 1; i >= 0; i--) {
            result[i] = digits[i] + shift;
            if(result[i] >= 10) {
                result[i] = result[i] - 10;
                shift = 1;
            } else {
                shift = 0;
            }
            
            if(shift == 0) {
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
