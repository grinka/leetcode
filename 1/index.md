# 1. Two Sum
<a name="top"></a>

- [Original Problem](https://leetcode.com/problems/two-sum/description/)
- [Solution 1. Javascript](#javascript-solution)
- [Solution 1a. Javascript, using Map](#javascript-solution-use-map)
- [Solution 2. C#](#c-solution)


<details>
<summary>Problem</summary>

## Problem
### Complexity: Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have ***exactly* one solution**, and you may not use the same element twice.

You can return the answer in any order.

## Example 1:

> **Input:** nums = [2,7,11,15], target = 9\
> **Output:** [0,1]\
> **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

## Example 2:

> **Input:** nums = [3,2,4], target = 6\
> **Output:** [1,2]

## Example 3:

> **Input:** nums = [3,3], target = 6\
> **Output:** [0,1]
 

## Constraints:

- `2 <= nums.length <= 10`<sup>`4`</sup>
- `-10`<sup>`9`</sup>` <= nums[i] <= 10`<sup>`9`</sup>
- `-10`<sup>`9`</sup>` <= target <= 10`<sup>`9`</sup>
- **Only one valid answer exists.**


> [!TIP]Hint 1
A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions just for completeness. It is from these brute force solutions that you can come up with optimizations.


>[!TIP]Hint 2
So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?

>[!TIP]Hint 3
The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?

</details>

## Javascript solution
[Top](#top)
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let collector = {};
  for(idx = 0; idx < nums.length; idx++) {
    const elem = nums[idx];
    const second = target - elem;
    if (typeof(collector[second]) !== 'undefined') {
      return [collector[second], idx];
    } else {
      collector[elem] = idx;
    }
  }
  return [];
};
```

## Javascript solution, use Map
[Top](#top)
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indicies = new Map();
    for(let i = 0; i < nums.length; i++) {
        const pair = target - nums[i];
        if(indicies.has(pair)) {
            return [indicies.get(pair), i];
        }
        indicies.set(nums[i], i);
    }

    return [];
};
```

## C# Solution
[Top](#top)

```csharp
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var collector = new Dictionary<int, int>();
        for(var idx = 0; idx < nums.Length; idx++) {
            int second = target - nums[idx];
            if(collector.ContainsKey(second)) {
                return new[] { collector[second], idx };
            }
            if(!collector.ContainsKey(nums[idx])) {
                collector.Add(nums[idx], idx);
            }
        }
        throw new Exception("Valid answer does not exist");
    }
}
```
