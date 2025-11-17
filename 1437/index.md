# 1437. Check If All 1's Are at Least Length K Places Away

- [Original Problem](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Easy

Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

### Example 1:

![Example 1](image.png)

> **Input:** nums = [1,0,0,0,1,0,0,1], k = 2\
> **Output:** true\
> **Explanation:** Each of the 1s are at least 2 places away from each other.

### Example 2:

![Example 2](image-1.png)

> **Input:** nums = [1,0,0,1,0,1], k = 2\
> **Output:** false\
> **Explanation:** The second 1 and third 1 are only one apart from each other.

### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- `0 <= k <= nums.length`
- `nums[i]` is `0` or `1`

## Solution

### Intuition

Go over all items in the array. Keep track of the `last` index of `1` met in the array. Every time when new `1` met, check if distance to the previous one is less than `k`. If so, return false. Update the `last` index.

### Approach

Initialilze the `last` with value equal to `-k - 1`. This guarantees that if we meet `1` at `0`'th index, the distance will be considered as "good" and we don't need to perform additional validations every time.

- Loop over array. For every index
  - check if value at this index is `1`
    - check if distance is less than `k`. If so, return false
    - update the last index with the current value
- After the loop, return true - we didn't find any pair where distance is less than `k`

### Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

### Javascript

[Top](#1437-check-if-all-1s-are-at-least-length-k-places-away) | [Problem](#problem)

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let last = -k - 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            if(i - last <= k) {
                return false;
            }
            last = i;
        }
    }
    return true;
};
```