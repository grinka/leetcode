# 2154. Keep Multiplying Found Values by Two

- [Original Problem](https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem

You are given an array of integers `nums`. You are also given an integer `original` which is the first number that needs to be searched for in `nums`.

You then do the following steps:

1. If `original` is found in `nums`, **multiply** it by two (i.e., set `original = 2 * original`).
2. Otherwise, **stop** the process.
3. **Repeat** this process with the new number as long as you keep finding the number.
 
Return _the **final** value of_ `original`.

 

### Example 1:

> **Input:** nums = [5,3,6,1,12], original = 3\
> **Output:** 24\
> **Explanation: **
> - 3 is found in nums. 3 is multiplied by 2 to obtain 6.
> - 6 is found in nums. 6 is multiplied by 2 to obtain 12.
> - 12 is found in nums. 12 is multiplied by 2 to obtain 24.
> - 24 is not found in nums. Thus, 24 is returned.
 
### Example 2:

> **Input:** nums = [2,7,9], original = 4\
> **Output:** 4\
> **Explanation:**
> - 4 is not found in nums. Thus, 4 is returned.
 

### Constraints:

1 <= nums.length <= 1000
1 <= nums[i], original <= 1000

## Solution

### Intuition

If we could easily verfy whether some number is presented in the array, the solution is simple: double the number and check if it's there. Stop then it's not found.

### Approach
The trick is to use most efficient language features.

1. Use `Set` instead of an array. `O(1)` complexity to check if value is there
2. Use bit shift instead of mmultiply
 
### Complexity
- Time complexity: _O(n)_
- Space complexity: _O(n)_

### Javascript

[Top](#2154-keep-multiplying-found-values-by-two) | 
[Problem](#problem) | 
[Solution](#solution) (
    <small>[Javascript](#javascript) |
    [C#](#c)</small>
)

```javascript
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const tag = new Set(nums);
    while(tag.has(original)) {
        original <<= 1;
    }
    return original;
};
```

### C#

``csharp
public class Solution {
    public int FindFinalValue(int[] nums, int original) {
        while(nums.Contains(original)) {
            original <<= 1;
        }
        return original;
    }
}
```