# 46. Permutations

- [Original Problem](https://leetcode.com/problems/permutations/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.

### Example 1:

> **Input:** nums = [1,2,3]\
> **Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

### Example 2:

> **Input:** nums = [0,1]\
> **Output:** [[0,1],[1,0]]

### Example 3:

> **Input:** nums = [1]\
> **Output:** [[1]]
 
### Constraints:

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All the integers of `nums` are **unique**.

## Solution
### Javascript

[Top](#46-permutations) | [Problem](#problem)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
    const appendItems = (i, list) => {
        const ret = [];
        for(let item of list) {
            ret.push(...appendItemsToSingle(i, item));
        }

        return ret;
    }

    const appendItemsToSingle = (i, item) => {
        let ret = [];
        for(let j = 0; j < n; j++) {
            if(item[j] === undefined) {
                const t = [...item];
                t[j] = i;
                ret.push(t);
            }
        }
        return ret;
    }

    const result = [new Array(n)];
    for(let i = 0; i < n; i++) {
        result.push(...appendItems(nums[i], result));
    }

    return result.filter(x => x.findIndex(b => b === undefined) === -1);
};
```