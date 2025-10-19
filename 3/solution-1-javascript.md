- [Problem](index)
- [Solution 2. C#](solution-2-csharp)
- [Solution 3. PHP](solution-3-php)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ss = '';
    let maxLen = 0;
    for(let i = 0; i < s.length; i++) {
        const f = ss.indexOf(s[i]);
        ss += s[i];
        if(f === -1) {
            if(ss.length > maxLen) {
                maxLen = ss.length;
            }
        } else {
            ss = ss.slice(f+1);
        }
    }
    return maxLen;
};
```