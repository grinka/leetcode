# 39. Combination Sum

- [Original Problem](https://leetcode.com/problems/combination-sum/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Medium

Given an array of **distinct** integers `candidates` and a target integer `target`, return _a list of all **unique combinations** of_ `candidates` _where the chosen numbers sum to_ `target`. You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

### Example 1:

> **Input:** candidates = [2,3,6,7], target = 7\
> **Output:** [[2,2,3],[7]]\
> **Explanation:**\
> 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.\
> 7 is a candidate, and 7 = 7.\
> These are the only two combinations.

### Example 2:

> **Input:** candidates = [2,3,5], target = 8\
> **Output:** [[2,2,2,2],[2,3,3],[3,5]]

### Example 3:

> **Input:** candidates = [2], target = 1\
> **Output:** []
 

### Constraints:

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of `candidates` are **distinct**.
- `1 <= target <= 40`

## Solution
### Javascript

[Top](#39-combination-sum) | [Problem](#problem)

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    let cs1 = function(start, sumTarget) {
        if(start >= candidates.length && candidates[start] > sumTarget) {
            return [];
        }
        if(candidates[start] === sumTarget) {
            return [[sumTarget]];
        }
        let result = [];
        let b = start;
        let sv = candidates[start];
        while(b < candidates.length && candidates[b] <= sumTarget) {
            const tail = cs1(b, sumTarget - sv);
            if(tail && tail.length > 0) {
                result = result.concat(tail.map(x => [sv, ...x]));
            }
            b++;
        }
        
        return result;
    }
    
    let r = [];
    let i = 0;
    while(i < candidates.length && candidates[i] <= target) {
        let t = cs1(i, target);
        if(t && t.length > 0) {
            r = r.concat(t);
        }
        i++;
    }
    return r;
};
```