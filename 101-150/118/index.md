# 118. Pascal's Triangle

- [Original Problem](https://leetcode.com/problems/pascals-triangle/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
**Complexity: Easy**

Given an integer `numRows`, return the first numRows of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![Pascal's Triangle](image.png)

### Example 1:
> **Input:** numRows = 5\
> **Output:** [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

### Example 2:
> **Input:** numRows = 1\
> **Output:** [[1]]

### Constraints:
- `1 <= numRows <= 30`

## Solution

### Javascript

[Top](#118-pascals-triangle) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript |
    [C#](#c)
</small>)

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
    for(let i = 1; i < numRows; i++) {
        const last = result[result.length - 1];
        const row = [1];
        for(j = 1; j < last.length; j++) {
            row.push(last[j] + last[j -  1]);
        }
        row.push(1);
        result.push(row);
    }

    return result;
};
```

### C#

[Top](#118-pascals-triangle) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript](#javascript) |
    C#
</small>)

```csharp
public class Solution {
    private List<int> createNextList(IList<int> prev) {
        int leftItem = 0;
        var result = prev.Aggregate(new List<int>(), (list, item) => {
            list.Add(item + leftItem);
            leftItem = item;
            return list;
        });
        result.Add(leftItem);
        return result;
    }
    
    public IList<IList<int>> Generate(int numRows) {
        var result = new List<IList<int>>();
        if(numRows == 0) return result;
        var row = new List<int> { 1 };
        result.Add(row);
        for(var i = 1; i < numRows; i++) {
            row = createNextList(row);
            result.Add(row);
        }
        return result;
    }
}
```
