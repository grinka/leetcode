# 6. Zigzag Conversion

- [Original Problem](https://leetcode.com/problems/zigzag-conversion/description/)
- [Solution](#javascript-solution)

## Problem
### Complexity: Medium

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```
And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

`string convert(string s, int numRows);`
 

## Example 1:

> **Input:** s = "PAYPALISHIRING", numRows = 3\
**Output:** "PAHNAPLSIIGYIR"\

## Example 2:

> **Input:** s = "PAYPALISHIRING", numRows = 4\
**Output:** "PINALSIGYAHRPI"\
**Explanation:**
```
P     I    N
A   L S  I G
Y A   H R
P     I
```

## Example 3:

> **Input:** s = "A", numRows = 1\
**Output:** "A"
 

## Constraints:

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`

## Javascript Solution
[Top](#6-zigzag-conversion) | [Problem](#problem)

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
    return m.map((row) => row.join('')).join('');
};
```