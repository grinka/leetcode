# 67. Add Binary

- [Original Problem](https://leetcode.com/problems/add-binary/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

Given two binary strings `a` and `b`, return their sum as a binary string.

### Example 1:

> **Input:** a = "11", b = "1"\
> **Output:** "100"

### Example 2:

> **Input:** a = "1010", b = "1011"\
> **Output:** "10101"
 
### Constraints:

- `1 <= a.length, b.length <= 10^4`
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

## Solution
### Javascript

[Top](#67-add-binary) | [Problem](#problem)

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let addon = 0;
    let result = [];
    const la = a.length;
    const lb = b.length;
    for(let i = 1; i <= Math.max(la, lb); i++) {
        const v = +(a[la - i] || 0) + +(b[lb - i] || 0) + addon;
        result.push(v === 1 || v === 3 ? 1 : 0);
        addon = (v === 2 || v === 3 ? 1 : 0);
    }
    if(addon === 1) {
        result.push(1);
    }
    return result.reverse().join('');
};
```
