# 1930. Unique Length-3 Palindromi Subsequences

- [Original Problem](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given a string `s`, return _the number of **unique palindromes of length three** that are a subsequence of_ `s`.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted **once**.

A **palindrome** is a string that reads the same forwards and backwards.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

- For example, `"ace"` is a subsequence of `"abcde"`.
 

### Example 1:

> **Input:** s = "aabca"\
> **Output:** 3
> **Explanation:** The 3 palindromic subsequences of length 3 are:
> - "aba" (subsequence of "<u>a</u>a<u>b</u>c<u>a</u>")
> - "aaa" (subsequence of "<u>aa</u>bc<u>a</u>")
> - "aca" (subsequence of "<u>a</u>ab<u>ca</u>")

### Example 2:

> **Input:** s = "adc"\
> **Output:** 0\
> **Explanation:** There are no palindromic subsequences of length 3 in "adc".

### Example 3:

> **Input:** s = "bbcbaba"\
> **Output:** 4\
> **Explanation:** The 4 palindromic subsequences of length 3 are:
> - "bbb" (subsequence of "<u>bb</u>c<u>b</u>aba")
> - "bcb" (subsequence of "<u>b</u>b<u>cb</u>aba")
> - "bab" (subsequence of "<u>b</u>bcb<u>ab</u>a")
> - "aba" (subsequence of "bbcb<u>aba</u>")
 

### Constraints:

- 3 <= s.length <= 10<sup>5</sup>
- `s` consists of only lowercase English letters.

## Solution
### Javascript

[Top](#1930-unique-length-3-palindromi-subsequences) | [Problem](#problem)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const most = s.split('').reduce((collector, c, i) => {
        const v = collector.get(c) ?? [i, i];
        v[1] = i;
        collector.set(c, v);
        return collector;
    }, new Map());

    let sum = 0;
    for(let [char, [startIdx, endIdx]] of most) {
        if(startIdx < endIdx) {
            let t = new Set();
            for(let i = startIdx + 1; i < endIdx; i++) {
                const c = s[i];
                if(!t.has(c)) {
                    sum++;
                    t.add(c);
                }
            }
            //sum += new Set(s.substring(startIdx + 1, endIdx)).size;
        }
    }
    return sum;
};
```