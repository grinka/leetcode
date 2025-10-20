# 2011. Final Value of Variable After Performing Operations

- [Problem](index)
- [Solution 1. Javascript](solution-1-javascript)

## C# Solution

Solution might be non-optimal, but it'one-liner

```csharp
public class Solution {
    public int FinalValueAfterOperations(string[] operations) => operations.Aggregate(0, (i, s) => (s[0] == '+' || s[2] == '+') ? i + 1 : i - 1);
}
```
