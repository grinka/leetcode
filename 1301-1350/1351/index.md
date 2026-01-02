# 1351. Count Negative Numbers in a Sorted Matrix

- [Original Problem](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

Given a `m x n` matrix `grid` which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in `grid`.

### Example 1:
> **Input:** grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]\
> **Output:** 8\
> **Explanation:** There are 8 negatives number in the matrix.

### Example 2:
> **Input:** grid = [[3,2],[1,0]]\
> **Output:** 0

### Constraints:
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m`, `n <= 100`
- `-100 <= grid[i][j] <= 100`

**Follow up:** Could you find an `O(n + m)` solution?

## Solution

### Intuition
To make algorythm most efficient, we need to do as less calculations as possible. Let's try to calculate only positive numbers and stop as soon as we find the negative number.

- if negative number is in the middle of the row - we can move to the next row, because all numbers on the right will be negative
- if negative number is the first number of the row - we can stop counting, because all numbers in this row and below are negative

After counting all positive numbers, we can substract the count of product m * n

### Approach
1. Initialize positives count with 0
2. Loop over rows
   - if first number in the row is less than 0, stop the loop
3. Loop over cells of the row
   - if number is greater or equal to zero, increment the positives counter
   - else - break the inner loop
4. return the n * m - positives

### Complexity
- **Time complexity:** O(m * n) - we need to check all items of the array if they all are positive
- **Space complexity:** O(1)

### Javascript
**Runtime: 0ms, Beats: 100%**

[Top](#1351-count-negative-numbers-in-a-sorted-matrix) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let positives = 0;
    const m = grid[0].length, n = grid.length;
    for(let y = 0; y < n; y++) {
        if(grid[y][0] < 0) {
            break;
        }
        for(let x = 0; x < m; x++) {
            if(grid[y][x] >= 0) {
                positives++;
            } else {
                break;
            }
        }
    }

    return (m * n) - positives;
};
```
