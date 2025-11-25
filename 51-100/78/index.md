# 78. Subsets

- [Original Problem](https://leetcode.com/problems/subsets/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given an integer array `nums` of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

### Example 1:

> **Input:** nums = [1,2,3]\
> **Output:** [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

### Example 2:

> **Input:** nums = [0]\
> **Output:** [[],[0]]
 
### Constraints:

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- All the numbers of `nums` are unique.

## Solution
### Javascript

[Top](#78-subsets) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let r = [[]], hash = new Set();
    for(let n of nums) {
        r.push(...r.map((x) => [...x, n]));
    }

    return r;
};
```
