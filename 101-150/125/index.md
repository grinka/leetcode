# 125. Valid Palindrome

- [Original Problem](https://leetcode.com/problems/valid-palindrome/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
**Complexity: Easy**

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` *if it is a **palindrome**, or* `false` *otherwise*.

### Example 1:
> **Input:** s = "A man, a plan, a canal: Panama"\
> **Output:** true\
> **Explanation:** "amanaplanacanalpanama" is a palindrome.

### Example 2:
> **Input:** s = "race a car"\
> **Output:** false\
> **Explanation:** "raceacar" is not a palindrome.

### Example 3:
> **Input:** s = " "\
> **Output:** true\
> **Explanation:** s is an empty string "" after removing non-alphanumeric characters.\
> Since an empty string reads the same forward and backward, it is a palindrome.

### Constraints:
- 1 <= s.length <= 2 * 10<sup>5</sup>
- `s` consists only of printable ASCII characters.

## Solution

### Javascript

[Top](#125-valid-palindrome) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript |
    [C#](#c)
</small>)

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    const isAlphanum = (c) => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    let l = 0, r = s.length - 1;

    while(l <= r) {
        while(!isAlphanum(s[l]) && l < r) {
            l++;
        }
        while(!isAlphanum(s[r]) && l < r) {
            r--;
        }
        if(l >= r) {
            return true;
        }

        if(s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
};
```

### C#

[Top](#125-valid-palindrome) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript](#javascript) |
    C#
</small>)

```csharp
public class Solution {
    public bool IsPalindrome(string s) {
        if(s.Length < 2) {
            return true;
        }
        
        Func<char, bool> isAlphaNumeric = (c) => {
            return ((c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z'));
        };
        
        var leftIndex = 0;
        var rightIndex = s.Length - 1;
        while(leftIndex < rightIndex && rightIndex >= 0 && leftIndex < s.Length) {
            while(leftIndex < s.Length && !isAlphaNumeric(s[leftIndex])) {
                leftIndex++;
            }
            while(rightIndex >= 0 && !isAlphaNumeric(s[rightIndex])) {
                rightIndex--;
            }
            if(leftIndex >= rightIndex )
                return true;
            
            
            if(char.ToLower(s[leftIndex]) != Char.ToLower(s[rightIndex])) {
                return false;
            }
            leftIndex++;
            rightIndex--;
        }
        
        return true;
    }
}
```
