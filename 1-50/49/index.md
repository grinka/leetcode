# 49. Group Anagram

- [Original Problem](https://leetcode.com/problems/group-anagrams/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

### Example 1:

> **Input:** strs = ["eat","tea","tan","ate","nat","bat"]\
> **Output:** [["bat"],["nat","tan"],["ate","eat","tea"]]\
> **Explanation:**\
> - There is no string in strs that can be rearranged to form `"bat"`.
> - The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
> - The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.

### Example 2:

> **Input:** strs = [""]\
> **Output:** [[""]]\

### Example 3:

> **Input:** strs = ["a"]\
> **Output:** [["a"]]

### Constraints:

- 1 <= strs.length <= 10<sup>4</sup>
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Solution
### Javascript

[Top](#49-group-anagram) | [Problem](#problem)

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    const map = new Map();
    for(let s of strs) {
        const sorteds = s.split('').sort((a, b) => a > b ? 1 : a === b ? 0 : -1).join('');
        if(!map.has(sorteds)) {
            map.set(sorteds, result.length);
            result.push([]);
        }
        const subSet = result[map.get(sorteds)];
        subSet.push(s);
    }
    return result;
};
```