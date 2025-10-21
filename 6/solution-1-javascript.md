# 6. Zigzag Conversion

- [Problem](index)

## Javascript Solution

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }
    const m = Array(numRows).fill(0).map(() => []);
    let up = false;
    let row = 0;
    for(let i = 0; i < s.length; i++) {
        m[row].push(s[i]);
        if((up && row === 0) || (!up && row === numRows - 1)) {
            up = !up;
        }
        row += up ? -1 : 1;
    }
    const result = m.map((row) => row.join('')).join('');
    return result;
};
```