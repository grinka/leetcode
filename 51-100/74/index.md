# 74. Search a 2D Matrix

- [Original Problem](https://leetcode.com/problems/search-a-2d-matrix/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given an `m x n` integer matrix `matrix` with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.

You must write a solution in `O(log(m * n))` time complexity.

### Example 1:

![Example 1](image.png)

> **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3\
> **Output:** true

### Example 2:

> **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13\
> **Output:** false
 
### Constraints:

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`

## Solution
### Javascript

[Top](#74-search-a-2d-matrix) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    const get = (i) => matrix[Math.floor(i / n)][i % n];
    let l = 0, r = (n * m) - 1;
    if(get(l) === target || get(r) === target) {
        return true;
    }
    while(l < r - 1) {
        const m = Math.floor((r + l) / 2);
        const v = get(m);
        if(v === target) {
            return true;
        }
        if(v < target) {
            l = m;
        } else {
            r = m;
        }
    }

    return false;
};
```
