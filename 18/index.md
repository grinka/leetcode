# 18. 4Sum
- [Original Problem](https://leetcode.com/problems/4sum/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem

Given an array `nums` of `n` integers, return _an array of all the **unique** quadruplets_ `[nums[a], nums[b], nums[c], nums[d]]` such that:

- `0 <= a, b, c, d < n`
- `a`, `b`, `c`, and `d` are **distinct**.
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

You may return the answer in **any order**.

### Example 1:

> **Input:** nums = [1,0,-1,0,-2,2], target = 0\
> **Output:** [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

### Example 2:

> **Input:** nums = [2,2,2,2,2], target = 8\
> **Output:** [[2,2,2,2]]
 

### Constraints:

- `1 <= nums.length <= 200`
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- -10<sup>9</sup> <= target <= 10<sup>9</sup>

## Solution
### Javascript

[Top](#18-4sum) | [Problem](#problem)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const hashResult = {};
    const result = [];
    if(nums.length < 4) {
        return [];
    }
    nums.sort((a,b) => a-b); 
    for(let i = 0; i < nums.length - 3; i++) {
        const f = nums[i];
        for(let j = i + 1; j < nums.length - 2; j++) {
            const s = nums[j];
            let l = j + 1;
            let r = nums.length - 1;
            while(l < r) {
                if(f + s + nums[l] + nums[r] === target) {
                    const addResult = [f,s,nums[l], nums[r]];
                    if(hashResult[addResult] !== 1) {
                        result.push(addResult);
                        hashResult[addResult] = 1;
                    }
                    //break;
                } 
                if(f + s + nums[l] + nums[r] > target) {
                    r--;
                    while(r > l && nums[r+1] === nums[r]) r--;
                } else {
                    l++;
                    while(r > l && nums[l-1] === nums[l]) l++;
                }
            }
        }
    }
    return result;
};
```