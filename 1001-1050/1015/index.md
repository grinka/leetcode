# 1015. Smallest Integer Divisible by K

- [Original Problem](https://leetcode.com/problems/smallest-integer-divisible-by-k/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given a positive integer `k`, you need to find the **length** of the **smallest** positive integer `n` such that `n` is divisible by `k`, and `n` only contains the digit `1`.

Return _the **length** of `n`_. If there is no such `n`, return `-1`.

**Note:** `n` may not fit in a 64-bit signed integer.

### Example 1:

> **Input:** k = 1\
> **Output:** 1\
> **Explanation:** The smallest answer is n = 1, which has length 1.

### Example 2:

> **Input:** k = 2\
> **Output:** -1\
> **Explanation:** There is no such positive integer n divisible by 2.

### Example 3:

> **Input:** k = 3\
> **Output:** 3\
> **Explanation:** The smallest answer is n = 111, which has length 3.
 
### Constraints:

- 1 <= k <= 10<sup>5</sup>

## Solution
### Javascript

[Top](#1015-smallest-integer-divisible-by-k) | [Problem](#problem)

```javascript
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if(k & 1 === 0 || k % 5 === 0) {
        return -1;
    }
    let r = 0;
    for(let l = 1; l <= k; l++) {
        r = (r * 10 + 1) % k;
        if(r === 0) {
            return l;
        }
    }
    return -1;
};
```