# 75. Sort Colors

- [Original Problem](https://leetcode.com/problems/sort-colors/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given an array `nums` with `n` objects colored red, white, or blue, sort them [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

### Example 1:

> **Input:** nums = [2,0,2,1,1,0]\
> **Output:** [0,0,1,1,2,2]

### Example 2:

> **Input:** nums = [2,0,1]\
> **Output:** [0,1,2]
 
### Constraints:

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

### Follow up:
- Could you come up with a one-pass algorithm using only constant extra space?

### Hints:
1. A rather straight forward solution is a two-pass algorithm using counting sort.
2. Iterate the array counting number of 0's, 1's, and 2's.
3. Overwrite array with the total number of 0's, then 1's and followed by 2's.

## Solution
### Javascript

[Top](#75-sort-colors) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let [zeros, ones, twos] = nums.reduce((s, c) => [
        s[0] + (c === 0 ? 1 : 0),
        s[1] + (c === 1 ? 1 : 0),
        s[2] + (c === 2 ? 1 : 0)
    ], [0, 0, 0]);
    for(let i = 0; i < nums.length; i++) {
        if(i < zeros) {
            nums[i] = 0;
        } else if( i < zeros + ones) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
};
```
