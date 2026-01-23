# 3507. Minimum Pair Removal to Sort Array I

- [Original Problem](https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

Given an array `nums`, you can perform the following operation any number of times:

- Select the adjacent pair with the minimum sum in `nums`. If multiple such pairs exist, choose the leftmost one.
- Replace the pair with their sum.

Return the minimum number of operations needed to make the array non-decreasing.

An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

### Example 1:
> **Input:** nums = [5,2,3,1]\
> **Output:** 2\
> **Explanation:**
> - The pair `(3,1)` has the minimum sum of 4. After replacement, `nums = [5,2,4]`.
> - The pair `(2,4)` has the minimum sum of 6. After replacement, `nums = [5,6]`.
>
> The array `nums` became non-decreasing in two operations.

### Example 2:
> **Input:** nums = [1,2,2]\
> **Output:** 0\
> **Explanation:** The array `nums` is already sorted.

### Constraints:
- `1 <= nums.length <= 50`
- `-1000 <= nums[i] <= 1000`

## Solution

### Javascript
**Runtime: 1ms, Beats: 94%**

[Top](#3507-minimum-pair-removal-to-sort-array-i) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let ans = 0, isSorted = false;
    while(!isSorted) {

        let min_sum = Infinity, pos = 0;
        isSorted = true;
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] < nums[i - 1]) {
                isSorted = false;
            }
            const s = nums[i] + nums[ i - 1];
            if(s < min_sum) {
                min_sum = s;
                pos = i;
            }
        }

        if(!isSorted) {
            ans++;
            nums[pos - 1] = min_sum;
            nums.splice(pos, 1);
        } else {
            return ans;
        }
    }
};
```
