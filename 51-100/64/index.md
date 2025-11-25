# 64. Minimum Path Sum

- [Original Problem](https://leetcode.com/problems/minimum-path-sum/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

### Example 1:

![Example 1](image.png)

> **Input:** grid = [[1,3,1],[1,5,1],[4,2,1]]\
> **Output:** 7\
> **Explanation:** Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

### Example 2:

> **Input:** grid = [[1,2,3],[4,5,6]]\
> **Output:** 12
 
### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 200`
- `0 <= grid[i][j] <= 200`

## Solution
### Javascript

[Top](#64-minimum-path-sum) | [Problem](#problem)

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const height = grid.length - 1;
    const width = grid[0].length - 1;

    minCounts = [];
    for(let i = 0; i <= height; i++) {
        minCounts[i] = [];
    }

    const minFollowPath = (x, y) => {
        if(minCounts[y][x] === undefined) {
            let sum = grid[y][x];
            if(x === width && y === height) {
                minCounts[y][x] = sum;
            } else if(y === height) {
                minCounts[y][x] = sum + minFollowPath(x + 1, y);
            } else if(x === width) {
                minCounts[y][x] = sum + minFollowPath(x, y + 1);
            } else {
                minCounts[y][x] = Math.min(
                    sum + minFollowPath(x + 1, y),
                    sum + minFollowPath(x, y + 1)
                );
            }
        }
        return minCounts[y][x];
    }

    return minFollowPath(0, 0);
};
```