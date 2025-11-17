# 34. Find First and Last Position of Element in Sorted Array

- [Original Problem](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Medium

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

 

### Example 1:

> **Input:** nums = [5,7,7,8,8,10], target = 8\
> **Output:** [3,4]

### Example 2:

> **Input:** nums = [5,7,7,8,8,10], target = 6\
> **Output:** [-1,-1]

### Example 3:

> **Input:** nums = [], target = 0\
> **Output:** [-1,-1]
 
### Constraints:

- 0 <= nums.length <= 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- `nums` is a non-decreasing array.
- -10<sup>9</sup> <= target <= 10<sup>9</sup>

## Solution
### Javascript

[Top](#34-find-first-and-last-position-of-element-in-sorted-array) | [Problem](#problem)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1;
    if(nums[r] === target) {
        l = r;
    } else {
        while(l < r - 1 && nums[l] !== target) {
            const mid = Math.floor((r + l) / 2);
            if(nums[mid] > target) {
                r = mid;
            } else {
                l = mid;
            }
        }
        if(nums[l] !== target) {
            return [-1, -1];
        }
    }
    
    const base = l;
    const ans = [];
    if(base > 0 && nums[0] !== target) {
        let l = 0, r = base;
        while(l < r - 1) {
            const mid = Math.floor((r + l) / 2);
            if(nums[mid] < target) {
                l = mid;
            } else {
                r = mid;
            }
        }
        ans.push(r);
    } else {
        ans.push(0);
    }
    if(base < nums.length - 1 && nums[nums.length - 1] !== target) {
        let l = base, r = nums.length - 1;
        while(l < r - 1) {
            const mid = Math.floor((r + l) / 2);
            if(nums[mid] > target) {
                r = mid;
            } else {
                l = mid;
            }
        }
        ans.push(l);
    } else {
        ans.push(nums.length - 1);
    }

    return ans;
};
```