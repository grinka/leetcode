# 35. Search Insert Position

- [Original Problem](https://leetcode.com/problems/search-insert-position/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Easy

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

 

### Example 1:

> **Input:** nums = [1,3,5,6], target = 5\
> **Output:** 2

### Example 2:

> **Input:** nums = [1,3,5,6], target = 2\
> **Output:** 1

### Example 3:

> **Input:** nums = [1,3,5,6], target = 7\
> **Output:** 4
 
### Constraints:
 
- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- `nums` contains **distinct** values sorted in **ascending** order.
- -10<sup>4</sup> <= target <= 10<sup>4</sup>

## Solution
### Javascript

[Top](#35-search-insert-position) | [Problem](#problem)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return nums.reduce((s, c, i) => 
        c === target ? i : c < target ? i + 1 : s, 0);
};
```