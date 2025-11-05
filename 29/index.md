# 29. Divide Two Integer

- [Original Problem](https://leetcode.com/problems/divide-two-integers/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Medium

Given two integers `dividend` and `divisor`, divide two integers **without** using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, `8.345` would be truncated to `8`, and `-2.7335` would be truncated to `-2`.

Return the **quotient** _after dividing `dividend` by `divisor`_.

**Note:** Assume we are dealing with an environment that could only store integers within the **32-bit** signed integer range: [−2<sup>31</sup>, 2<sup>31</sup> − 1]. For this problem, if the quotient is strictly greater than 2<sup>31</sup> - 1, then return 2<sup>31</sup> - 1, and if the quotient is strictly less than -2<sup>31</sup>, then return -2<sup>31</sup>.

### Example 1:

> **Input:** dividend = 10, divisor = 3\
> **Output:** 3\
> **Explanation:** 10/3 = 3.33333.. which is truncated to 3.

### Example 2:

> **Input:** dividend = 7, divisor = -3\
> **Output:** -2\
> **Explanation:** 7/-3 = -2.33333.. which is truncated to -2.
 
### Constraints:

- -2<sup>31</sup> <= dividend, divisor <= 2<sup>31</sup> - 1
- `divisor != 0`

## Solution
### Javascript

[Top](#29-divide-two-integer) | [Problem](#problem)

```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign = false;
    if(divisor < 0) {
        sign = !sign;
        divisor = -divisor;
    }
    if(dividend < 0) {
        sign = !sign;
        dividend = -dividend;
    }
    if(dividend === 0 || dividend < divisor) {
        return 0;
    }
    if(divisor === 1) {
        if(dividend === 2147483648) {
            return sign ? - 2147483648 : 2147483647;
        }
        return sign ? -dividend : dividend;
    }
    let substractor = divisor;
    let quotient = 1;
    let subs = [];
    while(substractor <= dividend) {
        subs.push({quotient: quotient, substractor: substractor});
        substractor += substractor;
        quotient += quotient;
    }
    
    let result = 0;
    while(subs.length > 0) {
        const operand = subs.pop();
        if(dividend >= operand.substractor) {
            result += operand.quotient;
            dividend -= operand.substractor;
        }
    }
    
    return sign ? -result : result;
};
```