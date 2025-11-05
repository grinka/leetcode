# 26. Remove Duplicates from Sorted Array

- [Original Problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
- [Soluton](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
### Complexity: Easy

Given an integer array nums sorted in **non-decreasing** order, remove the duplicates in-place such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**.

Consider the number of _unique elements_ in `nums` to be `k`​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique numbers in **sorted order**. The remaining elements beyond index `k - 1` can be ignored.

### Custom Judge:

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted**.

### Example 1:

> **Input:** nums = [1,1,2]\
> **Output:** 2, nums = [1,2,_]\
> **Explanation:** Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.\
It does not matter what you leave beyond the returned k (hence they are underscores).

### Example 2:

> **Input:** nums = [0,0,1,1,1,2,2,3,3,4]\
> **Output:** 5, nums = [0,1,2,3,4,_,_,_,_,_]\
> **Explanation:** Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.\
It does not matter what you leave beyond the returned k (hence they are underscores).
 

### Constraints:

- 1 <= nums.length <= 3 * 10<sup>4</sup>
- `-100 <= nums[i] <= 100`
- `nums` is sorted in **non-decreasing** order.

## Solution
### Javascript

[Top](#26-remove-duplicates-from-sorted-array) |
[Problem](#problem) |
[Soluton](#solution) (<small>
Javascript |
[C#](#c) </small>)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let shift = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] == nums[i - 1 - shift]) {
            shift++;
        } else {
            if(shift > 0) {
                nums[i - shift] = nums[i];
            }
        }
    }
    return nums.length - shift;
};
```

### C#

[Top](#26-remove-duplicates-from-sorted-array) |
[Problem](#problem) |
[Soluton](#solution) (<small>
[Javascript](#javascript) |
C# </small>)


```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        var shift = 0;
        for(var idx = 1; idx < nums.Length; idx++) {
            if(nums[idx] == nums[idx - 1 - shift]) {
                shift++;
            } else {
                if(shift > 0) {
                    nums[idx - shift] = nums[idx];
                }
            }
        }
        return nums.Length - shift;
    }
}
```