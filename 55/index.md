# 55. Jump Game

- [Original Problem](https://leetcode.com/problems/jump-game/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` _if you can reach the last index, or_ `false` _otherwise_.

### Example 1:

> **Input:** nums = [2,3,1,1,4]\
> **Output:** true\
> **Explanation:** Jump 1 step from index 0 to 1, then 3 steps to the last index.

### Example 2:

> **Input:** nums = [3,2,1,0,4]\
> **Output:** false
> **Explanation:** You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

### Constraints:

- 1 <= nums.length <= 10<sup>4</sup>
- 0 <= nums[i] <= 10<sup>5</sup>

## Solution
### Javascript

[Top](#55-jump-game) | [Problem](#problem)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let fin = nums.length-1;
    for(let i = nums.length-2; i >= 0; i--) {
        if(i + nums[i] >= fin) {
            fin = i;
        }
    }
    return fin === 0;
};
```