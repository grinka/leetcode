# 131. Palindrome Partitioning

- [Original Problem](https://leetcode.com/problems/palindrome-partitioning/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return *all possible palindrome partitioning of* `s`.

### Example 1:
> **Input:** s = "aab"\
> **Output:** [["a","a","b"],["aa","b"]]

### Example 2:
> **Input:** s = "a"\
> **Output:** [["a"]]

### Constraints:
- `1 <= s.length <= 16`
- `s` contains only lowercase English letters.

## Solution

### Javascript

[Top](#131-palindrome-partitioning) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

```javascript
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const partitions = new Map();
    const isPalindrome = (s) => {
        let start = 0;
        let end = s.length - 1;
        while(start < end) {
            if(s[start++] !== s[end--]) {
                return false;
            }
        }
        return true;
    }

    const getPartitions = (s) => {
        let result = [];
        for(let i = 1; i < s.length; i++) {
            const prefix = s.slice(0, i);
            if(isPalindrome(prefix)) {
                const tails = getPartitions(s.slice(i));
                if(tails.length > 0) {
                    for(let t of tails) {
                        const extendTail = [prefix, ...t];
                        result.push(extendTail);
                    }
                }
            }
        }
        if(isPalindrome(s)) {
            result.push([s]);
        }
        return result;
    }

    const result = getPartitions(s);
    return result;
};
```
