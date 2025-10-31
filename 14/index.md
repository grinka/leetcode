# 14. Longest Common Prefix

- [Original Problem](https://leetcode.com/problems/longest-common-prefix/description/)
- [Solution](#solution)
  - [C#](#c)

## Problem
### Complexity: Easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Example 1:

> **Input:** strs = ["flower","flow","flight"]\
> **Output:** "fl"

### Example 2:

> **Input:** strs = ["dog","racecar","car"]\
> **Output:** ""\
> **Explanation:** There is no common prefix among the input strings.
 

### Constraints:

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.

## Solution

### C#

[Top](#14-longest-common-prefix) | [Problem](#problem)

```csharp
public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if(strs.Length == 0 || strs[0].Length == 0) {
            return "";
        }
        var foundPrefix = strs[0].Length;
        for(var i = 1; i < strs.Length; i++) {
            if(strs[i].Length == 0) {
                return "";
            }
            if(strs[i].Length < foundPrefix) {
                foundPrefix = strs[i].Length;
            }
            for(var j = 0; j < foundPrefix; j++) {
                if(strs[0][j] != strs[i][j]) {
                    if(j == 0) {
                        return "";
                    }
                    foundPrefix = j;
                    break;
                }
            }
        }
        if(foundPrefix > 0) {
            return strs[0].Substring(0, foundPrefix);
        } else {
            return "";
        }
    }
}
```