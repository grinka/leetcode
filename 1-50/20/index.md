# 20. Valid Parentheses

- [Original Problem](https://leetcode.com/problems/valid-parentheses/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Easy

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
 

### Example 1:

> **Input:** s = `"()"`\
> **Output:** true

### Example 2:

> **Input:** s = `"()[]{}"`\
> **Output:** true

### Example 3:

> **Input:** s = `"(]"`\
> **Output:** false

### Example 4:

> **Input:** s = `"([])"`\
> **Output:** true

### Example 5:

> **Input:** s = `"([)]"`\
> **Output:** false

### Constraints:

- 1 <= s.length <= 10<sup>4</sup>
- `s` consists of parentheses only `'()[]{}'`.

## Solution
### Javascript
[Top](#20-valid-parentheses) | [Problem](#problem)

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0)
        return true;
    let c = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            c.push(s[i]);
        } else {
            if(c.length === 0) {
                return false;
            }
            const o = c.pop();
            if(
                (s[i] === '}' && o === '{') || 
                (s[i] === ')' && o === '(') || 
                (s[i] === ']' && o === '[')
            )
                continue;
            return false;
        }
    }
    return c.length === 0;
};
```