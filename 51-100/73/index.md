# 73. Set Matrix Zeroes

- [Original Problem](https://leetcode.com/problems/set-matrix-zeroes/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.

You must do it [in place](https://en.wikipedia.org/wiki/In-place_algorithm).

### Example 1:

![Example 1](image.png)

> **Input:** matrix = [[1,1,1],[1,0,1],[1,1,1]]\
> **Output:** [[1,0,1],[0,0,0],[1,0,1]]

### Example 2:

![Example 2](image-1.png)

> **Input:** matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\
> **Output:** [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 
### Constraints:

- `m == matrix.length`
- `n == matrix[0].length`
- `1 <= m, n <= 200`
- `-2^31 <= matrix[i][j] <= 2^31 - 1`

### Follow up:

- A straightforward solution using `O(mn)` space is probably a bad idea.
- A simple improvement uses `O(m + n)` space, but still not the best solution.
- Could you devise a constant space solution?

### Hints:
1. If any cell of the matrix has a zero we can record its row and column number using additional memory. But if you don't want to use extra memory then you can manipulate the array instead. i.e. simulating exactly what the question says.
2. Setting cell values to zero on the fly while iterating might lead to discrepancies. What if you use some other integer value as your marker? There is still a better approach for this problem with O(1) space.
3. We could have used 2 sets to keep a record of rows/columns which need to be set to zero. But for an O(1) space solution, you can use one of the rows and and one of the columns to keep track of this information.
4. We can use the first cell of every row and column as a flag. This flag would determine whether a row or column has been set to zero.

## Solution
### Javascript

[Top](#73-set-matrix-zeroes) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;

    let firstRow0 = false, firstCol0 = false;
    for(let row = 0; row < m; row++) {
        if(matrix[row][0] === 0) {
            firstCol0 = true;
            break;
        };
    }
    for(let col = 0; col < n; col++) {
        if(matrix[0][col] === 0) {
            firstRow0 = true;
            break;
        }
    }


    for(let row = 1; row < m; row++) {
        for(let col = 1; col < n; col++) {
            if(matrix[row][col] === 0) {
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }

    for(let row = 1; row < m; row++) {
        for(let col = 1; col < n; col++) {
            if(matrix[0][col] === 0 || matrix[row][0] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if(firstCol0) {
        for(let row = 0; row < m; row++) {
            matrix[row][0] = 0;
        }
    }
    if(firstRow0) {
        for(let col = 0; col < n; col++) {
            matrix[0][col] = 0;
        }
    }
};
```
