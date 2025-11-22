# 53. Maximum Subarray

- [Original Problem](https://leetcode.com/problems/maximum-subarray/description/)
- [Solution](#solution)
  - [C#](#c)

## Problem
**Complexity: Medium**

Given an integer array `nums`, find the subarray with the largest sum, and return _its sum_.

### Example 1:

> **Input:** nums = [-2,1,-3,4,-1,2,1,-5,4]\
> **Output:** 6
> **Explanation:** The subarray [4,-1,2,1] has the largest sum 6.

### Example 2:

> **Input:** nums = [1]\
> **Output:** 1\
> **Explanation:** The subarray [1] has the largest sum 1.

### Example 3:

> **Input:** nums = [5,4,-1,7,8]\
> **Output:** 23\
> **Explanation:** The subarray [5,4,-1,7,8] has the largest sum 23.

### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>

## Solution
### C#

[Top](#53-maximum-subarray) | [Problem](#problem)

```csharp
public class Solution {
    public int MaxSubArray(int[] nums) {
        if(nums.Length == 0) {
            return 0;
        }
        if(nums.Length == 1) {
            return nums[0];
        }
        
        var l = nums.Length;
        
        var prevMax = nums[0];
        var totalMax = prevMax;
        
        for(var i = 1; i < l; i++) {
            if(prevMax < 0) {
                prevMax = nums[i];
            } else {
                prevMax += nums[i];
            }
            if(totalMax < prevMax) {
                totalMax = prevMax;
            }
        }
        
        return totalMax;
    }
}
```