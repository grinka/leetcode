# 3432. Count Partitions with Even Sum Difference

- [Original Problem](https://leetcode.com/problems/count-partitions-with-even-sum-difference/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

You are given an integer array `nums` of length `n`.

A partition is defined as an index `i` where `0 <= i < n - 1`, splitting the array into two non-empty subarrays such that:

- Left subarray contains indices `[0, i]`.
- Right subarray contains indices `[i + 1, n - 1]`.

Return the number of partitions where the difference between the sum of the left and right subarrays is even.

### Example 1:
> **Input:** nums = [10,10,3,7,6]\
> **Output:** 4\
> **Explanation:** The 4 partitions are:
> - `[10]`, `[10, 3, 7, 6]` with a sum difference of `10 - 26 = -16`, which is even.
> - `[10, 10]`, `[3, 7, 6]` with a sum difference of `20 - 16 = 4`, which is even.
> - `[10, 10, 3]`, `[7, 6]` with a sum difference of `23 - 13 = 10`, which is even.
> - `[10, 10, 3, 7]`, `[6]` with a sum difference of `30 - 6 = 24`, which is even.

### Example 2:
> **Input:** nums = [1,2,2]\
> **Output:** 0\
> **Explanation:** No partition results in an even sum difference.

### Example 3:
> **Input:** nums = [2,4,6,8]\
> **Output:** 3\
> **Explanation:** All partitions result in an even sum difference.

### Constraints:
- `2 <= n == nums.length <= 100`
- `1 <= nums[i] <= 100`

## Solution

### Intuition

Let's imagine that we know if total sum of the array is odd or even.

If it's odd, every time when we try to split array on two parts, we'll get one partition with odd sum and other will have even sum. Difference between them is always odd.

If it's even, every time, when we split array, we get two odd sums or two even sums. And difference between them is always even.

Finally what we need to do is:

1. Determine whether total sum is odd or even
2. If it's odd, return 0 - there are no way to have two partitions with even difference
3. If it's even - return total quantity of the partitions. It equals to total quantity of the element in the array - 1.

### Javascript

[Top](#3432-count-partitions-with-even-sum-difference) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

#### Approach 1: Calculate Sum

Calculate sum and return value depending of is it odd or even.

**Complexity:**
- Time complexity: O(n)
- Space complexity: O(1)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    const total = nums.reduce((s, c) => s + c, 0);
    return (total & 1 === 1) ? 0 : nums.length - 1;
};
```

#### Approach 2: Track Parity

Instead of summarizing all elements of the array and then decide if sum is odd or even, we can track the status (odd/even) of every subarray starting from zero element.

We can store the reminder of the current sum. Then we add the next element to this reminder. In this case if new element is even, the reminder of the new sum will stay same as it was before. If it's odd, reminder will switch from 0 to 1 or from 1 to 0.

Fastest way to calculate the reminder after division by 2 is to apply `& 1` operation. For odd number result will be 1, for even number it will be 0.

This approach looks more complex, but it allows to correctly calculate result even if we have total sum of the array which does not fit into integer number.

**Complexity:**
- Time complexity: O(n)
- Space complexity: O(1)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    return (nums.reduce((s, c) => (s + c) & 1, 0) === 1) 
        ? 0 : nums.length - 1;
};
```
