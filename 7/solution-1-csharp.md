# 7. Reverse Integer

- [Problem](index)

## C# Solution

```csharp
public class Solution {
    public int Reverse(int x) {
        int sum = 0;
        bool isNegative = x < 0;
        int xModified = isNegative ? -x : x;
        while(xModified > 0)  {
            if((sum >= 214748364 && xModified >=7) || sum > 214748364) {
                return 0;
            }
            sum = sum * 10 + xModified % 10;
            xModified = xModified / 10;
        }
        
        return isNegative ? -sum : sum;
    }
}
```