- [Problem](index)
- [Solution 1. Javascript](solution-1-javascript)
- [Solution 3. PHP](solution-3-php)

```csharp
public class Solution {
    private int findInBuilder(StringBuilder b, char c) {
        for(int i = 0; i < b.Length; i++) {
            if(b[i] == c) {
                return i;
            }
        }
        return -1;
    }
    public int LengthOfLongestSubstring(string s) {
        if(s.Length == 0){
            return 0;
        }
        var c = new StringBuilder();
        var max = 0;
        for(var i = 0; i < s.Length; i++) {
            var fnd = findInBuilder(c, s[i]);
            if(fnd > -1) {
                if(max < c.Length) {
                   max = c.Length;
                }
                if(c.Length > fnd) {
                    c.Remove(0, fnd + 1);
                } else {
                    c.Clear();
                }
            }
            c.Append(s[i]);
        }
        
        return Math.Max(max, c.Length);
    }
}
```