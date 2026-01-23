# 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold

- [Original Problem](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given a `m x n` matrix `mat` and an integer `threshold`, return the maximum side-length of a square with a sum less than or equal to `threshold` or return `0` if there is no such square.

### Example 1:

![Example 1](image.png)

> **Input:** mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4\
> **Output:** 2\
> **Explanation:** The maximum side length of square with sum less than 4 is 2 as shown.

### Example 2:
> **Input:** mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1\
> **Output:** 0

### Constraints:
- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 300`
- 0 <= mat[i][j] <= 10<sup>4</sup>
- 0 <= threshold <= 10<sup>5</sup>

## Solution

### Javascript
**Runtime: 356ms, Beats: 5%**

[Top](#1292-maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const height = mat.length;
    const width = mat[0].length;
    const prefixes = Array.from({ length: height }, () => Array(width).fill(0));
    const getMat = (y, x) => (x < 0 || x >= width || y < 0 || y >= height) 
        ? 0 : mat[y][x];
    const getPrefix = (y, x) => (x < 0 || x >= width || y < 0 || y >= height)
        ? 0 : prefixes[y][x];

    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {
            prefixes[y][x] = getMat(y, x) 
                + getPrefix(y, x - 1) 
                + getPrefix(y - 1, x)
                - getPrefix(y - 1, x - 1);
        }
    }

    const calcSum = (top, left, bottom, right) =>
        getPrefix(bottom, right)
            - getPrefix(bottom, left - 1)
            - getPrefix(top - 1, right)
            + getPrefix(top - 1, left - 1);

    for(let size = Math.min(width, height); size >= 1; size--) {
        for(let y = 0; y <= height - size; y++) {
            for(let x = 0; x <= width - size; x++) {
                if(calcSum(y, x, y + size - 1, x + size - 1) <= threshold) {
                    return size;
                }
            }
        }
    }

    return 0;
};
```
