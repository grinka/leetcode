# 136. Single Number

- [Original Problem](https://leetcode.com/problems/single-number/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
**Complexity: Easy**

Given a **non-empty** array of integers `nums`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

### Example 1:
> **Input:** nums = [2,2,1]\
> **Output:** 1

### Example 2:
> **Input:** nums = [4,1,2,1,2]\
> **Output:** 4

### Example 3:
> **Input:** nums = [1]\
> **Output:** 1

### Constraints:
- 1 <= nums.length <= 3 * 10<sup>4</sup>
- -3 * 10<sup>4</sup> <= nums[i] <= 3 * 10<sup>4</sup>
- Each element in the array appears twice except for one element which appears only once.

## Solution

### Javascript

[Top](#136-single-number) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript |
    [C#](#c)
</small>)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = (nums) => nums.reduce((s, c) => s ^ c, 0);
```

### C#

[Top](#136-single-number) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript](#javascript) |
    C#
</small>)

```csharp
public class Solution {
    // Used the suggested solution
    public int SingleNumber(int[] nums) {
        var result = 0;
        for(var i = 0; i < nums.Length; i++) {
            result ^= nums[i];
        }
        return result;
    }
}
```
