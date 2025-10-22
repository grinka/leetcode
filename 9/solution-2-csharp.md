# 9. Palindrome Number

- [Problem](index)
- [Javascript Solution](solution-1-javascript)

## C# Solution.

Initial solution, not optimal. I leave it here as an example.


```csharp
public class Solution {
    public bool IsPalindrome(int x) {
        if(x < 0) {
            return false;
        }
        if(x < 10) {
            return true;
        }
        if(x % 10 == 0) {
            return false;
        }
        
        long maxIdx = 1;
        int arrLength = 0;
        while(x > maxIdx) {
            arrLength++;
            maxIdx = maxIdx * 10;
        }
        maxIdx /= 10;
        var collected = 0;
        
        var result = new int[arrLength];
        var arrIdx = 0;
        
        while(maxIdx >= 1) {
            var parentPart = (int)Math.Floor((double)(x / maxIdx));
            var justDigit = parentPart - collected * 10;
            result[arrIdx++] = justDigit;
            
            collected = parentPart;
            maxIdx /= 10;
        }
        
        for(var i = 0; i < arrLength / 2; i++) {
            if(result[i] != result[arrLength - i - 1]) {
                return false;
            }
        }
        
        return true;
    }
}
```