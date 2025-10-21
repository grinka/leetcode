# 5. Longest Palindromic Substring

- [Problem](index)

## Javascript solution


```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    if(n === 1) {
        return s;
    }
    let mx = '';
    let mn = 0;
    for(let i = 0; i < n - 1; i++) {
        let l = i, r = i;
        while(l >= 0 && r < n && s[l] === s[r]) {
            l--;
            r++;
        }
        if(r - l + 1 > mn) {
            mx = s.slice(l + 1, r);
            mn = r - l + 1;
        }
        if(s[i+1] === s[i]) {
            l = i;
            r = i + 1;
            while(l >= 0 && r < n && s[l] === s[r]) {
                l--;
                r++;
            }
            if(r - l + 1 > mn) {
                mx = s.slice(l + 1, r);
                mn = r - l + 1;
            }
        }
    }

    return mx;
};
```