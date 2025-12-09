# 3583. Count Special Triplets

- [Original Problem](https://leetcode.com/problems/count-special-triplets/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given an integer array `nums`.

A **special triplet** is defined as a triplet of indices `(i, j, k)` such that:

- `0 <= i < j < k < n`, where `n = nums.length`
- `nums[i] == nums[j] * 2`
- `nums[k] == nums[j] * 2`

Return the total number of **special triplets** in the array.

Since the answer may be large, return it **modulo** 10<sup>9</sup> + 7.

### Example 1:
> **Input:** nums = [6,3,6]\
> **Output:** 1\
> **Explanation:** The only special triplet is `(i, j, k) = (0, 1, 2)`, where:
> - `nums[0] = 6`, `nums[1] = 3`, `nums[2] = 6`
> - `nums[0] = nums[1] * 2 = 3 * 2 = 6`
> - `nums[2] = nums[1] * 2 = 3 * 2 = 6`

### Example 2:
> **Input:** nums = [0,1,0,0]\
> **Output:** 1\
> **Explanation:** The only special triplet is `(i, j, k) = (0, 2, 3)`, where:
> - `nums[0] = 0`, `nums[2] = 0`, `nums[3] = 0`
> - `nums[0] = nums[2] * 2 = 0 * 2 = 0`
> - `nums[3] = nums[2] * 2 = 0 * 2 = 0`

### Example 3:
> **Input:** nums = [8,4,2,8,4]\
> **Output:** 2\
> **Explanation:** There are exactly two special triplets:
> - `(i, j, k) = (0, 1, 3)`
>   - `nums[0] = 8`, `nums[1] = 4`, `nums[3] = 8`
>   - `nums[0] = nums[1] * 2 = 4 * 2 = 8`
>   - `nums[3] = nums[1] * 2 = 4 * 2 = 8`
> - `(i, j, k) = (1, 2, 4)`
>   - `nums[1] = 4`, `nums[2] = 2`, `nums[4] = 4`
>   - `nums[1] = nums[2] * 2 = 2 * 2 = 4`
>   - `nums[4] = nums[2] * 2 = 2 * 2 = 4`

### Constraints:
- 3 <= n == nums.length <= 10<sup>5</sup>
- 0 <= nums[i] <= 10<sup>5</sup>

## Solution

### Intuition

Let's check all items from left to right and analyze, which numbers are important to us.

If we have a number and we already had a number which is two times greater - we probably have a middle number of the special triplet. If we get the number, how many `n*2` numbers we have on the left and on the right - we can count triplets by multiplying these two numbers.

Let's imagine that when we meet this "middle" number, we store the left multiplier. Then, when we meet `n*2` number on the right, we add this left multiplier to the final sum.

This works fine if we have only one "middle" number. What if we have 2 or more? Each of them will be a part of it's own triplet. Because we need to simply add the left multipliers for both numbers, we can store them together.

### Approach

1. Initialize `bigs` as empty map - it will store the possible n*2 values and their count
2. Initialize `smalls` as empty map. This map will store the possible middle numbers and sum of their left multipliers
3. Initialize `result` and `zeros` count with 0. We need separate counter for zeros, because if `n == 0`, `n * 2 == 0`, described approach gives wrong results. It's easier to count them separately
4. Loop over all items in the array:
   - Check if number is `0`, increase `zeros` counter
   - Else, check if we already have `n * 2` stored in our `bigs` set. It means, that n might be middle part of the triplet. Add the quantity of left multipliers for this middle to the `smalls` set.
   - Check if number is even. If so - this might be the right or left part of some triplet.
   - If this is right part, we can add all triplets - their count should be stored in the `smalls` set for the middle element of the triplet. Apply modulo operation to the result, so it will not overflow.
   - If this is left part of the triplet, increment the corresponding element of the `bigs` set.
5. Add all possible triplets, built from zeros:
   - Imagine that we're selecting middle points starting from the second one and ending with length - 2. And then multiply left and right parts. Add these products to the result and apply the modulo operation

### Complexity

- **Time complexity:** O(n)
- **Space complexity:** O(n) - where n is size of the array. In worst case (if all numbers are unique) we store them all in bigs and smalls arrays. So it will be O(3*n) what equals to O(n)

### Javascript

[Top](#3583-count-special-triplets) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    const bigs = new Map();
    const smalls = new Map();
    const modulo = 10**9 + 7;

    let result = 0, zeros = 0;
    for(let n of nums) {
        if(n === 0) {
            zeros++;
        } else {
            if(bigs.has(n * 2)) {
                const b = bigs.get(n * 2);
                const s = b + (smalls.get(n) ?? 0);
                smalls.set(n, s);
            }
            if((n & 1) === 0) {
                result = (result + (smalls.get(n / 2) ?? 0)) % modulo;
                bigs.set(n, 1 + (bigs.get(n) ?? 0));
            }
        }
    }

    for(let i = 1; i < zeros - 1; i++) {
        result = (result + (i * (zeros - i - 1))) % modulo;
    }

    return result;
};
```
