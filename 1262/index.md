# 1262. Greatest Sum Divisible by Three

- [Original Problem](https://leetcode.com/problems/greatest-sum-divisible-by-three/description/)
- [Solution](#solution)
  - [Javascript V.1](#javascript---v1)
  - [Javascript V.2](#javascript---v2)
  - [C#](#c)

## Problem
**Complexity: Medium**

Given an integer array `nums`, return _the **maximum possible sum** of elements of the array such that it is divisible by three_.

### Example 1:

> **Input:** nums = [3,6,5,1,8]\
> **Output:** 18\
> **Explanation:** Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

### Example 2:

> **Input:** nums = [4]\
> **Output:** 0\
> **Explanation:** Since 4 is not divisible by 3, do not pick any number.

### Example 3:

> **Input:** nums = [1,2,3,4,4]\
> **Output:** 12
> **Explanation:** Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).

### Constraints:

- 1 <= nums.length <= 4 * 10<sup>4</sup>
- 1 <= nums[i] <= 10<sup>4</sup>

## Solution

### Intuition

Let's imagine that we have the sum of all numbers. Then we check the reminder of this sum divided by 3.

- If it's 0, it's already divisible by 3 and we have maximum possible number
- if it's 1 or 2, we can substract the number with same "divide by 3 reminder" to get the number divisible by 3.

So problem is reduced to: find the total sum and minimal possible number with same "divide by 3 reminder". Easiest way is to track minimum possible numbers with reminder of 1 and 2 over the loop. Remember that if we add to numbers with reminder of 2, we get number with reminder of 1 and vice versa.

### Approach

Terms used:

- Minimum reminder - minimum number with "divide by 3 reminder" equal to specific value
- Corresponding reminder - number with same reminder as "current"
- Oposite reminder - number with reminder equal to "3 - current"

---

- Initialize "minimum reminder" values with value greater than any number in the array. We use 1_000_000 because limits for the array elements is 104
- Initialize sum with 0 - we'll collect the total sum here
- Loop over all numbers in the array
  - Add the current number to the sum
  - Check the reminder after the "divide the number by 3"
  - If it's not 0, update
    - Corresponding min reminder with smallest value between current value and current number
    - Opposite min reminder with smallest value between current value and "Corresponding min reminder + current number"
- Divide the final sum by 3 and check the reminder value
- If it's 0, return the sum
- Else, return the sum - corresponding min reminder

### Complexity
- **Time complexity:** _O(nums.length)_
- **Space complexity:** _O(1)_

### Javascript - v.1

[Top](#1262-greatest-sum-divisible-by-three) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript V.1 |
    [C#](#c) |
    [Javascript V.2](#javascript---v2)
</small>)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let r1 = r2 = 1_000_000;
    let sum = 0;

    for(const num of nums) {
        sum += num;
        if (num % 3 === 1) {
            r2 = Math.min(r2, r1 + num);
            r1 = Math.min(r1, num);
        } else if (num % 3 === 2) {
            r1 = Math.min(r1, r2 + num);
            r2 = Math.min(r2, num);
        }
    };

    switch(sum % 3) {
        case 0: return sum;
        case 1: return sum - r1;
        case 2: return sum - r2;
    }
};
```

### C#

[Top](#1262-greatest-sum-divisible-by-three) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript V.2](#javascript---v2) |
    C# |
    [Javascript V.1](#javascript---v1)
</small>)

```csharp
public class Solution {
    public int MaxSumDivThree(int[] nums) {
        var (sum, r1, r2) = (0, 100000, 100000);

        foreach(var n in nums) {
            sum += n;
            var reminder = n % 3;
            if(reminder == 1) {
                r2 = Math.Min(r2, r1 + n);
                r1 = Math.Min(r1, n);
            } else if(reminder == 2) {
                r1 = Math.Min(r1, r2 + n);
                r2 = Math.Min(r2, n);
            }
        }

        return new int[]{ sum, sum - r1, sum - r2 }[sum % 3];
    }
}
```

### Approach 2

Instead of tracking the "minimum reminder" we can track maximum sum with specific reminder. So we can have 3 numbers for every reminder and for each number in the array try to add this number for every of the 3 stored numbers. We'll get 3 new values and then update maximum sums with specific reminders to have max of two: current value and new generated value which has same reminder.

After end of the process we can simply get the value tracking maximum sum for reminder `0`.

This solution has same time and space complexity as v1.

### Javascript - v.2

[Top](#1262-greatest-sum-divisible-by-three) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript V.1](#javascript---v1) |
    [C#](#c) |
    Javascript V.2
</small>)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const dp = [0, 0, 0];
    for(const n of nums) {
        for(let m of dp.slice(0)) {
            const max = n + m;
            const mod = max % 3;
            if(max > dp[mod]) {
                dp[mod] = max;
            }
        }
    }

    return dp[0];
};
```

