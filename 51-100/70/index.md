# 70. Climbing Stairs

- [Original Problem](https://leetcode.com/problems/climbing-stairs/description/)
- [Solution](#solution)
  - [C#](#c)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Example 1:

> **Input:** n = 2\
> **Output:** 2\
> **Explanation:** There are two ways to climb to the top.\
> 1. 1 step + 1 step\
> 2. 2 steps

### Example 2:

> **Input:** n = 3\
> **Output:** 3\
> **Explanation:** There are three ways to climb to the top.\
> 1. 1 step + 1 step + 1 step\
> 2. 1 step + 2 steps\
> 3. 2 steps + 1 step
 
### Constraints:

- `1 <= n <= 45`

### Hint:
- To reach nth step, what could have been your previous steps? (Think about the step sizes)

## Solution

### C#

[Top](#70-climbing-stairs) |
[Problem](#problem) |
[Solution](#solution) (<small>
    C# |
    [Javascript](#javascript)
</small>)

```csharp
public class Solution {
    public int ClimbStairs(int n) {
        if(n == 1) return 1;
        if(n == 2) return 2;
        var ppv = 1;
        var pv = 2;
        for(var i = 3; i <= n; i++) {
            var current = ppv + pv;
            ppv = pv;
            pv = current;
        }
        return pv;
    }
}
```

### Javascript

[Top](#70-climbing-stairs) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [C#](#c) |
    Javascript
</small>)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    let prev = 1;
    let cur = 2;
    for(let i = 2; i < n; i++) {
        [prev, cur] = [cur, prev + cur];
    }
    return cur;
};
```
