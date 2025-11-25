# 1526. Minimum Number of Increments on Subarrays to Form a Target Array

- [Original Problem](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/description/)
- [Solution](#solution)
  - [Javascript V.1 - one liner](#javascript-v1---one-liner)
  - [Javascript V.2 - loop](#javascript-v2---loop)
  - [C#](#c---one-liner)


## Problem
### Complexity: Hard

You are given an integer array `target`. You have an integer array `initial` of the same size as `target` with all elements initially zeros.

In one operation you can choose **any** subarray from `initial` and increment each value by one.

Return _the minimum number of operations to form a_ `target` _array from_ `initial`.

The test cases are generated so that the answer fits in a 32-bit integer.

### Example 1:

> **Input:** target = [1,2,3,2,1]\
> **Output:** 3\
> **Explanation:** We need at least 3 operations to form the target array from the initial array.\
> [**<u>0,0,0,0,0</u>**] increment 1 from index 0 to 4 (inclusive).\
> [1,**<u>1,1,1</u>**,1] increment 1 from index 1 to 3 (inclusive).\
> [1,2,**<u>2</u>**,2,1] increment 1 at index 2.\
> [1,2,3,2,1] target array is formed.

### Example 2:

> **Input:** target = [3,1,1,2]\
> **Output:** 4\
> **Explanation:** [**<u>0,0,0,0</u>**] -> 
[1,1,1,**<u>1</u>**] -> 
[**<u>1</u>**,1,1,2] -> 
[**<u>2</u>**,1,1,2] -> 
[3,1,1,2]

### Example 3:

> **Input:** target = [3,1,5,4,2]\
> **Output:** 7\
> **Explanation:** [**<u>0,0,0,0,0</u>**] -> 
[**<u>1</u>**,1,1,1,1] -> 
[**<u>2</u>**,1,1,1,1] -> 
[3,1,**<u>1,1,1</u>**] -> 
[3,1,**<u>2,2</u>**,2] -> 
[3,1,**<u>3,3</u>**,2] -> 
[3,1,**<u>4</u>**,4,2] -> 
[3,1,5,4,2].
 

### Constraints:

- 1 <= target.length <= 10<sup>5</sup>
- 1 <= target[i] <= 10<sup>5</sup>

## Solution

### Javascript V.1 - one liner
[Top](#1526-minimum-number-of-increments-on-subarrays-to-form-a-target-array) |
[Problem](#problem) | 
[Solution](#solution) (
Javascript V.1 - one liner |
[Javascript V.2 - loop](#javascript-v2---loop) |
[C#](#c---one-liner) )


```javascript
/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = (target) => 
    target.reduce((s, c) => ({ prev: c, res: s.res + (c > s.prev ? (c - s.prev) : 0) }), {prev: 0, res: 0}).res;
```

Other version of one-liner

```javascript
var minNumberOperations = (target) => 
    target.reduce((s, c, i, a) => s + (i === 0 ? c : (c > a[i - 1]) ? c - a[i - 1] : 0));
```

### Javascript V.2 - loop
[Top](#1526-minimum-number-of-increments-on-subarrays-to-form-a-target-array) |
[Problem](#problem) | 
[Solution](#solution) (
[Javascript V.1 - one liner](#javascript-v1---one-liner) |
Javascript V.2 - loop |
[C#](#c---one-liner) )

```javascript
/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let res = target[0];
    for(let i = 1; i < target.length; i++) {
        if(target[i] > target[i - 1]) {
            res += target[i] - target[i - 1];
        }
    }
    return res;
};
```

### C# - one liner
[Top](#1526-minimum-number-of-increments-on-subarrays-to-form-a-target-array) |
[Problem](#problem) | 
[Solution](#solution) (
[Javascript V.1 - one liner](#javascript-v1---one-liner) |
[Javascript V.2 - loop](#javascript-v2---loop) |
C# )

```csharp
public class Solution {
    public int MinNumberOperations(int[] target) => 
        target.Aggregate(new { prev = 0, res = 0}, (sum, cur) => 
            new { prev = cur, res = sum.res + (cur > sum.prev ? (cur - sum.prev) : 0)}).res;
}
```