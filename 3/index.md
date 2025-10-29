# 3. Longest Substring Without Repeating Characters

- [Original Problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
- [Solution 1. Javascript](#javascrit-solution)
- [Solution 2. C#](#c-solution)
- [Solution 3. PHP](#php-solution)

## Problem 
### Complexity: Medium

Given a string s, find the length of the longest substring without duplicate characters.

## Example 1:

> **Input:** s = "abcabcbb"\
> **Output:** 3\
> **Explanation:** The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

 
## Example 2:

> **Input:** s = "bbbbb"\
> **Output:** 1\
> **Explanation:** The answer is "b", with the length of 1.

## Example 3:

> **Input:** s = "pwwkew"\
> **Output:** 3\
> **Explanation:** The answer is "wke", with the length of 3.\
> Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

## Constraints:

- `0 <= s.length <= 5 * 10`<sup>`4`</sup>
- s consists of English letters, digits, symbols and spaces.

## Javascrit solution
[Top](#3-longest-substring-without-repeating-characters) | 
[Problem](#problem) | 
Javascript Solution |
[C# Solution](#c-solution) |
[PHP Solution](#php-solution)


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

## C# Solution
[Top](#3-longest-substring-without-repeating-characters) |
[Problem](#problem) | 
[Javascript Solution](#javascrit-solution) |
C# Solution |
[PHP Solution](#php-solution)

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

## PHP Solution
[Top](#3-longest-substring-without-repeating-characters) | 
[Problem](#problem) | 
[Javascript Solution](#javascrit-solution) |
[C# Solution](#c-solution) |
PHP Solution

```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        if(strlen($s) === 0) {
            return 0;
        }
        $maxLength = 0;
        $maxbegin = 0;
        for($i = 0; $i < strlen($s); $i++) {
            $p = strpos($s, $s[$i], $maxbegin);
            if($p == $i) {
                if($i - $maxbegin > $maxLength) {
                    $maxLength = $i - $maxbegin;
                }
            } else {
                $maxbegin = $p + 1;
            }
        }
        
        return $maxLength + 1;
    }
}
```