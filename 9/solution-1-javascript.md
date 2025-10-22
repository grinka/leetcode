# 9. Palindrome Number

- [Problem](index)
- [C# Solution](solution-2-csharp)

## Javascript Solution

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    let m = x, r = 0;
    while(m > 0) {
        r = r * 10 + (m % 10);
        m = Math.floor(m / 10);
    }

    return x === r;
};
```