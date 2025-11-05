# 28. Find the Index of the First Occurence in a String

- [Original Problem](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)
- [Solution](#solution)
  - [C#](#c)
  - [Javascript](#javascript)

## Problem
### Complexity: Easy

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

### Example 1:

> **Input:** haystack = "sadbutsad", needle = "sad"\
> **Output:** 0\
> **Explanation:** "sad" occurs at index 0 and 6.\
> The first occurrence is at index 0, so we return 0.

### Example 2:

> **Input:** haystack = "leetcode", needle = "leeto"\
> **Output:** -1\
> **Explanation:** "leeto" did not occur in "leetcode", so we return -1.

### Constraints:

- 1 <= haystack.length, needle.length <= 10<sup>4</sup>
- `haystack` and needle consist of only lowercase English characters.

## Solution
### C#

[Top](#28-find-the-index-of-the-first-occurence-in-a-string) |
[Problem](#problem) |
[Solution](#solution) (<small>
C# | 
[Javascript](#javascript) </small>)

```csharp
public class Solution {
    public int StrStr(string haystack, string needle) {
        if(string.IsNullOrEmpty(needle)) {
            return 0;
        }
        if(string.IsNullOrEmpty(haystack) || haystack.Length < needle.Length) {
            return -1;
        }
        
        for(var i = 0; i <= haystack.Length - needle.Length; i++) {
            var match = true;
            for(var j = 0; j < needle.Length; j++) {
                if(haystack[i+j] != needle[j]) {
                    match = false;
                    break;
                }
            }
            if(match) {
                return i;
            }
        }
        return -1;
    }
}
```

### Javascript

[Top](#28-find-the-index-of-the-first-occurence-in-a-string) |
[Problem](#problem) |
[Solution](#solution) (<small>
[C#](#c) | 
Javascript </small>)

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) {
        return -1;
    }
    if(needle.length === haystack.length) {
        return needle === haystack ? 0 : -1;
    }
    const sp = new Set();
    const needleStart = needle[0];
    const l = needle.length - 1;
    for(let i = 0; i < haystack.length; i++) {
        const c = haystack[i];
        for(let j of [...sp]) {
            if(needle[i - j] === c) {
                if(i - j === l) {
                    return j;
                }
            } else {
                sp.delete(j);
            }
        }
        if(needleStart === c) {
            if(l === 0) {
                return i;
            }
            sp.add(i);
        }
    }
    return -1;
};
```