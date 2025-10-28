# 8. String to Integer (atoi)

- [Original Problem](https://leetcode.com/problems/string-to-integer-atoi/description/)
- [C# Solution](#c-solution)
- [Javascript Solution](#javascript-solution)

## Problem
### Coplexity: Medium

Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer.

The algorithm for `myAtoi(string s)` is as follows:

1. **Whitespace:** Ignore any leading whitespace (`" "`).
2. **Signedness:** Determine the sign by checking if the next character is `'-'` or `'+'`, assuming positivity if neither present.
3. **Conversion:** Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
4. **Rounding:** If the integer is out of the 32-bit signed integer range [-2<sup>31</sup>, 2<sup>31</sup> - 1], then round the integer to remain in the range. Specifically, integers less than -2<sup>31</sup> should be rounded to -2<sup>31</sup>, and integers greater than 2<sup>31</sup> - 1 should be rounded to 2<sup>31</sup> - 1.

Return the integer as the final result.


## Example 1:

> **Input:** s = "42"\
**Output:** 42\
**Explanation:**
The underlined characters are what is read in and the caret is the current reader position.\
```
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
```

## Example 2:

> **Input:** s = " -042"\
**Output:** -42\
**Explanation:**
```
Step 1: "   -042" (leading whitespace is read and ignored)
            ^
Step 2: "   -042" ('-' is read, so the result should be negative)
             ^
Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
               ^
```

### Example 3:

> **Input:** s = "1337c0d3"\
**Output:** 1337\
**Explanation:**
```
Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
         ^
Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
             ^
```

## Example 4:

> **Input:** s = "0-1"\
**Output:** 0\
**Explanation:**

```
Step 1: "0-1" (no characters read because there is no leading whitespace)
         ^
Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
          ^
```

## Example 5:

> **Input:** s = "words and 987"\
**Output:** 0\
**Explanation:**\
Reading stops at the first non-digit character 'w'.

## Constraints:

- `0 <= s.length <= 200`
- `s` consists of English letters (lower-case and upper-case), digits `(0-9)`, `' '`, `'+'`, `'-'`, and `'.'`.

## C# Solution

[Top](#8-string-to-integer-atoi) |
[Problem](#problem) |
C# Solution |
[Javascript Solution](#javascript-solution)

```csharp
public class Solution {
    public int MyAtoi(string str) {
        int maxAllowed = 214748364; // 7 for positive, 8 for negative
        var isPositive = true;
        if(str.Length == 0) {
            return 0;
        }
        var idx = 0;
        while(idx < str.Length && str[idx] == ' ') {
            idx++;
        }
        if(idx >= str.Length) {
            return 0;
        }
        
        if(str[idx] == '-' || str[idx] == '+') {
            isPositive = str[idx] == '+';
            idx++;
            if(idx >= str.Length) {
                return 0;
            }
        }
        
        var collect = 0;
        while(idx < str.Length && str[idx] >= '0' && str[idx] <= '9') {
            if( 
                collect > maxAllowed ||
                (
                    collect == maxAllowed && 
                    ((str[idx] > '7' && isPositive) || (str[idx] > '8' && !isPositive))
                )
            ) {
                return isPositive ? 2147483647 : -2147483648;
            }
            
            collect = collect * 10 + (str[idx] - '0');
            idx++;
        }
        
        return isPositive ? collect : -collect;
        
    }
}
```

## Javascript Solution
[Top](#8-string-to-integer-atoi) |
[Problem](#problem) |
[C# Solution](#c-solution) |
Javascript Solution


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