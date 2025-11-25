# 454. Ones and Zeroes

- [Original Problem](https://leetcode.com/problems/ones-and-zeroes/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Medium

You are given an array of binary strings `strs` and two integers `m` and `n`.

Return _the size of the largest subset of `strs` such that there are at most `m` `0`'s and `n` `1`'s in the subset_.

A set `x` is a **subset** of a set `y` if all elements of `x` are also elements of `y`.

### Example 1:

> **Input:** strs = ["10","0001","111001","1","0"], m = 5, n = 3\
> **Output:** 4\
> **Explanation:** The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.\
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.\
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.\

### Example 2:

> **Input:** strs = ["10","0","1"], m = 1, n = 1\
> **Output:** 2\
> **Explanation:** The largest subset is {"0", "1"}, so the answer is 2.
 

### Constraints:

- `1 <= strs.length <= 600`
- `1 <= strs[i].length <= 100`
- `strs[i]` consists only of digits `'0'` and `'1'`.
- `1 <= m, n <= 100`

## Solution

The main idea is to track the maximum possible value for every combination of `1`'s and `0`'s. We keep them in a 2D matrix of size `m*n` (we don't need all versions where quantity of `0`'s greater than `m` and quantity of `1`'s is greater than `n`).

We loop over all elements in the array and try to update values in the matrix

- count how many `0`'s and `1`'s the array element have. We'get values `ones` and `zeroes`;
- try to add this string to all "chains" we can. It means - adding `1` to all possible counts. Let's assume that 
  - take only rows where rowIndex is between `0` and `m - zeroes`;
  - take only columns where colIndex is between `0` and `n - ones`;
  - try to add new string to every combination. For the matrix it means: try to add `1` to every cell with index `[rowIndex + zeroes][celIndex + ones]`. If new value is greater than old value - we've got new maximum;
- to avoid double counting of same string, we count from higher indexes to lower;

Finaly the cell `[m][n]` should have maximum possible length of the subset where count of zeroes is less or equal to `m` and count of ones is less or equal to `n`

### Javascript
[Top](#454-ones-and-zeroes) | [Problem](#problem)

```javascript
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    for(const s of strs) {
        let zeroes = 0, ones = 0;
        for(let i = 0; i < s.length; i++) {
            if(s.charAt(i) === '0') {
                zeroes++;
            } else {
                ones++;
            }
        }

        for(let j = m; j >= zeroes; j--) {
            for(let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j][k], 1 + dp[j - zeroes][k - ones]);
            }
        }
    }

    return dp[m][n];
};
```