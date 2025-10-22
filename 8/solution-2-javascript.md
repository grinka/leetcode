# 8. String to Integer (atoi)

- [Problem](index)

## Javascript Solution
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const maxAllowed = 214748364; // 7 for positive, 8 for negative
    const maxPositive = 2147483647;
    const maxNegative = -2147483648;
    const code0 = 48;
    const l = s.length;
    let isPositive = true;
    if(l === 0) {
        return 0;
    }

    let idx = 0;

    while(idx < l && s[idx] === ' ') {
        idx++;
    }
    if(idx >= l) {
        return 0;
    }

    if(s[idx] === '-') {
        isPositive = false;
        idx++;
    } else if(s[idx] === '+') {
        idx++;
    }

    let result = 0;
    while(idx < l && s[idx] >= '0' && s[idx] <= '9') {
        if(result > maxAllowed || 
            (result === maxAllowed && 
                ((s[idx] > '7' && isPositive) || (s[idx] === '9' && !isPositive))
            )
        ) {
            return isPositive ? maxPositive : maxNegative;
        }

        result = result * 10 + s.charCodeAt(idx) - code0;
        idx++;
    }

    return isPositive ? result : -result;
};
```