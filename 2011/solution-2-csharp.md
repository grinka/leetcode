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

## C# Solution 2. Several lines. Faster.

This solution is faster, than previous one.
- Uses `foreach` instead of `Aggregate`
- Verifies only one char value instead of two

```csharp
public class Solution {
    public int FinalValueAfterOperations(string[] operations) {
        var x = 0;
        foreach(var op in operations) {
            x += (op[1] == '+') ? 1 : -1;
        }
        return x;
    }
}
```
