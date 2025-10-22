# 8. String to Integer (atoi)

- [Problem](index)

## C# Solution

```csharp
public class Solution {
    public int MyAtoi(string str) {
        int maxAllowed = 214748364; // 7 for positive, 8 for negative
        var isPositive = true;
        if(str.Length == 0) {
            return 0;
        }
        var idx = 0;
        while(idx < str.Length && str[idx] == ' ') {
            idx++;
        }
        if(idx >= str.Length) {
            return 0;
        }
        
        if(str[idx] == '-' || str[idx] == '+') {
            isPositive = str[idx] == '+';
            idx++;
            if(idx >= str.Length) {
                return 0;
            }
        }
        
        var collect = 0;
        while(idx < str.Length && str[idx] >= '0' && str[idx] <= '9') {
            if( 
                collect > maxAllowed ||
                (
                    collect == maxAllowed && 
                    ((str[idx] > '7' && isPositive) || (str[idx] > '8' && !isPositive))
                )
            ) {
                return isPositive ? 2147483647 : -2147483648;
            }
            
            collect = collect * 10 + (str[idx] - '0');
            idx++;
        }
        
        return isPositive ? collect : -collect;
        
    }
}
```