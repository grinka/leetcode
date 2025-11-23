# 5. Longest Palindromic Substring

- [Original Problem](https://leetcode.com/problems/longest-palindromic-substring/description/)
- [Javascript Solution](#javascript-solution)

## Problem
### Complexity: Medium

Given a string `s`, return _the longest **palindromic substring**_ in `s`.

## Example 1:

> **Input:** s = "babad"\
**Output:** "bab"\
**Explanation:** "aba" is also a valid answer.

## Example 2:

> **Input:** s = "cbbd"\
**Output:** "bb"
 
## Constraints:

- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

## Javascript solution
[Top](#5-longest-palindromic-substring) |
[Problem](#problem)

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