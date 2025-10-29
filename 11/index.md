# 11. Container With Most Water

- [Original Problem](https://leetcode.com/problems/container-with-most-water/description/)
- [Javascript Solution](#javascript-solution)

## Problem
### Complexity: Medium

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the i<sup>th</sup> line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the _maximum amount of water a container can store_.

**Notice** that you may not slant the container.

## Example 1:

![Example 1](image.png)

> **Input:** height = [1,8,6,2,5,4,8,3,7]\
> **Output:** 49\
> **Explanation:** The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

## Example 2:

> **Input:** height = [1,1]\
> **Output:** 1
 

## Constraints:

- `n == height.length`
- 2 <= n <= 10<sup>5</sup>
- 0 <= height[i] <= 10<sup>4</sup>

## Javascript Solution
[Top](#11-container-with-most-water) | [Problem](#problem)

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1, res = 0;
    while(l < r) {
        res = Math.max(res, (r - l) * Math.min(height[l], height[r]));
        if(height[l] < height[r]){
            l++;
        } else {
            r--;
        }
    }

    return res;
};
```
