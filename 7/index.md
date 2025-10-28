# 7. Reverse Integer

- [Original Problem](https://leetcode.com/problems/reverse-integer/description/)
- [C# Solution](#c-solution)

## Problem
### Coplexity: Medium

Given a signed 32-bit integer `x`, return `x` _with its digits reversed_. If reversing x causes the value to go outside the signed 32-bit integer range [-2<sup>31</sup>, 2<sup>31</sup> - 1], then return `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**


## Example 1:

> **Input:** x = 123\
**Output:** 321

## Example 2:

> **Input:** x = -123\
**Output:** -321

## Example 3:

> **Input:** x = 120\
**Output:** 21
 

## Constraints:

- -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1

## C# Solution
[Top](#7-reverse-integer) | [Problem](#problem)

```csharp
public class Solution {
    public int Reverse(int x) {
        int sum = 0;
        bool isNegative = x < 0;
        int xModified = isNegative ? -x : x;
        while(xModified > 0)  {
            if((sum >= 214748364 && xModified >=7) || sum > 214748364) {
                return 0;
            }
            sum = sum * 10 + xModified % 10;
            xModified = xModified / 10;
        }
        
        return isNegative ? -sum : sum;
    }
}
```