# 4. Median of Two Sorted Arrays

- [Original Problem](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)
- [Javascript Solution](#javascript-solution)

## Problem
### Complexity: Hard

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

## Example 1:

> **Input:** nums1 = [1,3], nums2 = [2]\
> **Output:** 2.00000\
> **Explanation:** merged array = [1,2,3] and median is 2.

## Example 2:

> **Input:** nums1 = [1,2], nums2 = [3,4]\
> **Output:** 2.50000\
> **Explanation:** merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

## Constraints:

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10`<sup>`6`</sup>` <= nums1[i], nums2[i] <= 10`<sup>`6`</sup>

## Javascript solution
[Top](#4-median-of-two-sorted-arrays) |
[Problem](#problem)

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    if(m === 0 && n === 0) {
        return 0;
    }
    const j = Math.floor((n + m - 1) / 2);
    const joined = [];
    let i = 0, i1 = 0, i2 = 0, k = Math.min(nums1[0], nums2[0]);
    while(i1 < m || i2 < n) {
        if(i1 < m) {
            if(i2 >= n || nums2[i2] >= nums1[i1]) {
                k = nums1[i1];
                joined.push(k);
                i1++;
            } else {
                k = nums2[i2];
                joined.push(k);
                i2++;
            }
        } else {
            k = nums2[i2];
            joined.push(k);
            i2++;
        }
        i++;
    }
    return (joined[j] + joined[j + 1 - ((n + m) % 2)]) / 2;
};
```