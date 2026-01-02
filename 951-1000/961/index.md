# 961. N-Repeated Element in Size 2N Array

- [Original Problem](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

You are given an integer array `nums` with the following properties:

- `nums.length == 2 * n`.
- `nums` contains `n + 1` unique elements.
- Exactly one element of `nums` is repeated `n` times.

Return the element that is repeated `n` times.

### Example 1:
> **Input:** nums = [1,2,3,3]\
> **Output:** 3

### Example 2:
> **Input:** nums = [2,1,2,5,3,2]\
> **Output:** 2

### Example 3:
> **Input:** nums = [5,1,5,2,5,3,5,4]\
> **Output:** 5

### Constraints:
- 2 <= n <= 5000
- nums.length == 2 * n
- 0 <= nums[i] <= 10<sup>4</sup>
- `nums` contains `n + 1` unique elements and one of them is repeated exactly `n` times.

## Solution

The key insight is that if an element appears `n` times in an array of length `2n`, it must appear within any window of 3 consecutive elements (except possibly at the very end). This is because with only `n + 1` unique elements and one appearing `n` times, the repeated element cannot be separated by more than 2 positions without violating the constraints.

### Javascript
**Runtime: 0ms, Beats: 100%**

[Top](#961-n-repeated-element-in-size-2n-array) |
[Problem](#problem) |
[Solution](#solution)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] === nums[i + 1] || nums[i] === nums[i + 2]) {
            return nums[i];
        }
    }

    return nums.at(-1);
};
```
