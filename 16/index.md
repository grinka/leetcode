# 16. 3Sum Closest
- [Original Problem](https://leetcode.com/problems/3sum-closest/description/)
- [Solution](#solution)
    - [Javascript](#javascript)

## Problem

Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

Return _the sum of the three integers_.

You may assume that each input would have exactly one solution.

### Example 1:

> **Input:** nums = [-1,2,1,-4], target = 1\
> **Output:** 2\
> **Explanation:** The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

### Example 2:

> **Input:** nums = [0,0,0], target = 1\
> **Output:** 0\
> **Explanation:** The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 
### Constraints:

- `3 <= nums.length <= 500`
- `-1000 <= nums[i] <= 1000`
- `-104 <= target <= 104`

## Solution
### Javascript

[Top](#16-3sum-colsest) | [Problem](#problem)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let closest = nums[0] + nums[1] + nums[2];

    const setNewClosest = (newVal) => {
        if(Math.abs(target - closest) > Math.abs(target - newVal)) {
            closest = newVal;
        }
    }
    let ml = [...nums];
    while(ml.length >= 3) {
        const base = ml.splice(0, 1)[0];
        const ad = target - base;
        let l = 0;
        let r = ml.length - 1;
        while(l < r - 1) {
            const s = ml[l] + ml[r];
            setNewClosest(s+base);
            if(s === ad) {
                return target;
            } else if(s > ad) {
                r--;
            } else {
                l++;
            }
        }
        setNewClosest(base + ml[l] + ml[r]);
    }
    return closest;
};
```