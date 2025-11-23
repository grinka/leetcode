# 22. Generate Parentheses

- [Original Problem](https://leetcode.com/problems/generate-parentheses/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Medium

Given `n` pairs of parentheses, write a function to _generate all combinations of well-formed parentheses_.

### Example 1:

> **Input:** n = 3\
> **Output:** ["((()))","(()())","(())()","()(())","()()()"]

### Example 2:

> **Input:** n = 1
> **Output:** ["()"]

### Constraints:

- `1 <= n <= 8`

## Solution
### Javascript

[Top](#22-generate-parentheses) | [Problem](#problem)

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    /**
     * s - collected string, 
     * l - how many left parenthesis used, 
     * r - how many right parenthesis used 
     * */
    const res = [
        {s: '(', l: 1, r: 0 }
    ];
    do {
        const line = res[0];
       
        if(line.l < n)
            res.push({ s: line.s + '(', l: line.l + 1, r: line.r });
        if(line.r < line.l) {
            res.push({ s: line.s + ')', l: line.l, r: line.r + 1 });
        }
        
        res.splice(0, 1);
        
    } while(res[0].r + res[0].l < n*2);
    
    return res.map(x => x.s);
    
};
```