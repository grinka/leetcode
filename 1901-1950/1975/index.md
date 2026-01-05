# 1975. Maximum Matrix Sum

- [Original Problem](https://leetcode.com/problems/maximum-matrix-sum/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given an `n x n` integer `matrix`. You can do the following operation **any** number of times:

- Choose any two **adjacent** elements of `matrix` and **multiply** each of them by `-1`.

Two elements are considered **adjacent** if and only if they share a **border**.

Your goal is to **maximize** the summation of the matrix's elements. Return *the **maximum** sum of the matrix's elements using the operation mentioned above.*

### Example 1:
> **Input:** matrix = [[1,-1],[-1,1]]\
> **Output:** 4\
> **Explanation:** We can follow the following steps to reach sum equals 4:
> - Multiply the 2 elements in the first row by -1.
> - Multiply the 2 elements in the first column by -1.

### Example 2:
> **Input:** matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]\
> **Output:** 16\
> **Explanation:** We can follow the following step to reach sum equals 16:
> - Multiply the 2 last elements in the second row by -1.

### Constraints:
- `n == matrix.length == matrix[i].length`
- 2 <= n <= 250
- -10<sup>5</sup> <= matrix[i][j] <= 10<sup>5</sup>

## Solution

### Javascript
**Runtime: 5ms, Beats: 100%**

[Top](#1975-maximum-matrix-sum) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let total = 0, count = 0, min = Infinity;
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[0].length; x++) {
            const v = matrix[y][x];
            const vp = Math.abs(v);
            total += vp;
            min = Math.min(min, vp);
            if(v < 0) {
                count++;
            }
        }
    }

    return (count & 1) === 0 ? total : total - 2 * min;
};
```
