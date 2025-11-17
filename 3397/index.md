# 3397. Maximum Number of Distinct Elements After Operations

- [Original Problem](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/description/)
- [Solution](#solution)
  - [Javascript](#javascript-solution)

## Problem
### Complexity: Medium

You are given an integer array nums and an integer k.

You are allowed to perform the following operation on each element of the array at most once:

- Add an integer in the range `[-k, k]` to the element.
Return the maximum possible number of distinct elements in nums after performing the operations.

## Example 1:

> **Input:** nums = [1,2,2,3,3,4], k = 2\
> **Output:** 6\
> **Explanation:**
> `nums` changes to `[-1, 0, 1, 2, 3, 4]` after performing operations on the first four elements.

## Example 2:

> **Input:** `nums = [4,4,4,4], k = 1`\
> **Output:** 3\
> **Explanation:**
> By adding -1 to `nums[0]` and 1 to `nums[1]`, `nums` changes to `[3, 5, 4, 4]`.

## Constraints:

- `1 <= nums.length <= 10`<sup>`5`</sup>
- `1 <= nums[i] <= 10`<sup>`9`</sup>
- `0 <= k <= 10`<sup>`9`</sup>

## Solution

### Intuition
If we first sort the array in accending order and then for each position find the minimum possible new value (n - k <= ... <= n + k) greater than previous, we build the new array with maximum possible number of distinct elements.

### Approach
Sort the array in accending order.

Set the `result` value to 0 and `last` value to `k - 1`. It guarantees, that `nums[0] - k > last` because all numbers are positive.

`last` shoud keep the last new distinct value and it's the biggest one.

Loop over all elements
- Compare that `n - k > last`. 
  - It means that even if we substract the `k` from the current number, we get the new distinct element, which is greater than the last one.
  - increment result (we found new distinct number)
  - set the `last` to the `n - k` - the smallest distinct value we can generate
- Else compare the `n + k > last`. 
  - It means that there exists some distinct number from the interval `[n - k ... n + k]` which is greater than `last`. 
  - This is the new distinct value we can calculate. Let's select the smallest possible - `last + 1`. 
  - increment result
  - set the `last = last + 1`
- If none of the previous conditions satisfied, it means that smallest possible distinct number is already greater than `n + k` so even if we don't have any new distinct number we can generate. Skip the number and go to the next.


### Complexity
- Time complexity: *O(m * log(m))* where `m` is the length of the array. Most complex operation is initial sorting. The algorythm itself has *O(m)* time complexity
- Space complexity: *O(1)*

## Javascript Solution
[Top](#3397-maximum-number-of-distinct-elements-after-operations) | 
[Problem](#problem) |
[Soution](#solution)

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    nums.sort((a, b) => a - b);
    let last =  - k - 1, result = 0;
    for(let n of nums) {
        if(n - k > last) {
            result++;
            last = n - k;
        } else if(n + k > last) {
            result++;
            last++;
        }
    }

    return result;
};
```