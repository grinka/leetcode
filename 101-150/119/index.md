# 119. Pascal's Triangle II

- [Original Problem](https://leetcode.com/problems/pascals-triangle-ii/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

Given an integer `rowIndex`, return the `rowIndex`<sup>th</sup> **(0-indexed)** row of the **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![Pascal's Triangle](image.png)

### Example 1:
> **Input:** rowIndex = 3\
> **Output:** [1,3,3,1]

### Example 2:
> **Input:** rowIndex = 0\
> **Output:** [1]

### Example 3:
> **Input:** rowIndex = 1\
> **Output:** [1,1]

### Constraints:
- `0 <= rowIndex <= 33`

**Follow up:** Could you optimize your algorithm to use only `O(rowIndex)` extra space?

## Solution

### Javascript

[Top](#119-pascals-triangle-ii) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

```javascript
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) {
        return [1];
    }
    if(rowIndex === 1) {
        return [1, 1];
    }
    let lastRow = [1, 1];
    for(let i = 2; i <= rowIndex; i++) {
        const newLast = [1];
        for(let j = 1; j < lastRow.length; j++) {
            newLast.push(lastRow[j - 1] + lastRow[j]);
        }
        newLast.push(1);
        lastRow = newLast;
    }
    return lastRow;
};
```
