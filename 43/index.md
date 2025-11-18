# 43. Mutiply Strings

- [Original Problem](https://leetcode.com/problems/multiply-strings/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Medium

Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.

**Note:** You must not use any built-in BigInteger library or convert the inputs to integer directly.

### Example 1:

> **Input:** num1 = "2", num2 = "3"\
> **Output:** "6"

### Example 2:

> **Input:** num1 = "123", num2 = "456"\
> **Output:** "56088"
 
### Constraints:

- `1 <= num1.length, num2.length <= 200`
- `num1` and `num2` consist of digits only.
- Both `num1` and `num2` do not contain any leading zero, except the number `0` itself.

## Solution
### Javascript

[Top](#43-mutiply-strings) | [Problem](#problem)

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') {
        return '0';
    }

    const mbydigit = (ar, digit) => {
        let addon = 0;
        for(let i = ar.length - 1; i >= 0; i--) {
            const m1 = (ar[i] * digit) + addon;
            addon = Math.floor(m1/10);
            ar[i] = m1 % 10;
        }
        if(addon > 0) {
            ar.unshift(addon);
        }
    }

    const sum2arra = (ar1, ar2) => {
        const maxLen = Math.max(ar1.length, ar2.length);
        const result = [];
        let addon = 0;
        for(let i = 1; i <= maxLen; i++) {
            const s1 = (ar1[ar1.length - i] || 0) + (ar2[ar2.length - i] || 0) + addon;
            result.unshift(s1 % 10);
            addon = Math.floor(s1/10);
        }
        if(addon > 0) {
            result.unshift(addon);
        }
        return result;
    }

    let a1 = num1.split('').map((x) => +x);
    let a2 = num2.split('').map((x) => +x);
    let result = [];

    for(let i = 0; i < a2.length; i++) {
        const digit = a2[a2.length - i - 1];
        let digitm = [...a1];
        mbydigit(digitm, digit);
        for(let j = 0; j<i; j++) {
            digitm.push(0);
        }
        result = sum2arra(result, digitm);
    }

    return result.join('');
};
```