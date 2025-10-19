# 1. Two Sum

- [Problem](index)
- [Solution 1. Javascript](solution-1-javascript)

## C# Solution

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