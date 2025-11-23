# 9. Palindrome Number

- [Original Problem](https://leetcode.com/problems/palindrome-number/description/)
- [Javascript Solution](#javascript-solution)
- [C# Solution](#c-solution)

## Problem
### Coplexity: Easy

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

## Example 1:

> **Input:** x = 121\
> **Output:** true\
> **Explanation:** 121 reads as 121 from left to right and from right to left.

## Example 2:

> **Input:** x = -121\
> **Output:** false\
> **Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

## Example 3:

> **Input:** x = 10\
> **Output:** false\
> **Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.
 

## Constraints:

- -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1


## Javascript Solution

[Top](#9-palindrome-number) |
[Problem](#problem) |
Javascript Solution |
[C# Solution](#c-solution)


```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    let m = x, r = 0;
    while(m > 0) {
        r = r * 10 + (m % 10);
        m = Math.floor(m / 10);
    }

    return x === r;
};
```

## C# Solution.

[Top](#9-palindrome-number) |
[Problem](#problem) |
[Javascript Solution](#javascript-solution) |
C# Solution

Initial solution, not optimal. I leave it here as an example.


```csharp
public class Solution {
    public bool IsPalindrome(int x) {
        if(x < 0) {
            return false;
        }
        if(x < 10) {
            return true;
        }
        if(x % 10 == 0) {
            return false;
        }
        
        long maxIdx = 1;
        int arrLength = 0;
        while(x > maxIdx) {
            arrLength++;
            maxIdx = maxIdx * 10;
        }
        maxIdx /= 10;
        var collected = 0;
        
        var result = new int[arrLength];
        var arrIdx = 0;
        
        while(maxIdx >= 1) {
            var parentPart = (int)Math.Floor((double)(x / maxIdx));
            var justDigit = parentPart - collected * 10;
            result[arrIdx++] = justDigit;
            
            collected = parentPart;
            maxIdx /= 10;
        }
        
        for(var i = 0; i < arrLength / 2; i++) {
            if(result[i] != result[arrLength - i - 1]) {
                return false;
            }
        }
        
        return true;
    }
}
```