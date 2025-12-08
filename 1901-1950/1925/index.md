# 1925. Count Square Sum Triples

- [Original Problem](https://leetcode.com/problems/count-square-sum-triples/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

A **square triple** `(a,b,c)` is a triple where `a`, `b`, and `c` are **integers** and a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.

Given an integer `n`, return *the number of **square triples** such that* `1 <= a, b, c <= n`.

### Example 1:
> **Input:** n = 5\
> **Output:** 2\
> **Explanation:** The square triples are (3,4,5) and (4,3,5).

### Example 2:
> **Input:** n = 10\
> **Output:** 4\
> **Explanation:** The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).

### Constraints:
- `1 <= n <= 250`

## Solution

### Javascript

[Top](#1925-count-square-sum-triples) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    const fullSquares = new Set();
    for(let i = 1; i <= n; i++) {
        fullSquares.add(i * i);
    }

    let result = 0;

    const ar = [...fullSquares];

    for(let i = 0; i < ar.length; i++) {
        for(let j = i; j < ar.length; j++) {
            const possible = ar[i] + ar[j];
            if(fullSquares.has(possible)) {
                result++;
                if(i !== j) {
                    result++;
                }
            }
        }
    }

    return result;
};
```
