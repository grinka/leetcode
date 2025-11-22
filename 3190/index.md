# 3190. Find Minimum Operations to Make All Elements Divisible by Three

- [Original Problem](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
**Complexity: Easy**

You are given an integer array `nums`. In one operation, you can add or subtract 1 from **any** element of `nums`.

Return the **minimum** number of operations to make all elements of `nums` divisible by 3.

### Example 1:

> **Input:** nums = [1,2,3,4]\
> **Output:** 3\
> **Explanation:**
>
> All array elements can be made divisible by 3 using 3 operations:
> - Subtract 1 from 1.
> - Add 1 to 2.
> - Subtract 1 from 4.

### Example 2:

> **Input:** nums = [3,6,9]\
> **Output:** 0

### Constraints:

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Solution

### Intuition

Every number from 1 to 50 might have 3 conditions

- equal to 3. No need to do anything to make it divisible by 3
- divisible by 3 + 1 - needs one operation to become divisible by 3
- divisible by 3 - 1 - needs one operation to become divisisble by 3

So all we need to do is check all numbers and if number is not divisible by 3, add 1 to the result.

### Approach

- For every number in the array divide by 3 and check the reminder
  - if it's 0, continue
  - else, increment result by 1

### Complexity
- Time complexity: _O(n)_
- Space complexity: _O(1)_

### Javascript

[Top](#3190-find-minimum-operations-to-make-all-elements-divisible-by-three) |
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
var minimumOperations = function(nums) {
    return nums.reduce((s, c) => (c % 3 === 0) ? s : s + 1, 0);
};
```

### C#

[Top](#3190-find-minimum-operations-to-make-all-elements-divisible-by-three) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript](#javascript) |
    C#
</small>)

```csharp
public class Solution {
    public int MinimumOperations(int[] nums) {
        var result = 0;
        foreach(var n in nums) {
            if(n % 3 != 0) {
                result++;
            }
        }

        return result;
    }
}
```