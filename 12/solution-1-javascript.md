# 12. Integer to Roman

- [Problem](index)

## Javascript Solution

```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let n = num;
    let result = '';
    const letters = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ];
    
    while(n > 0) {
        for(let l in letters) {
            if(n >= letters[l][0]) {
                result += letters[l][1];
                n -= letters[l][0];
                break;
            }
        }
    }
    return result;
};
```