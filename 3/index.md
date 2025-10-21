# 3. Longest Substring Without Repeating Characters

- [Original Problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
- [Solution 1. Javascript](solution-1-javascript)
- [Solution 2. C#](solution-2-csharp)
- [Solution 3. PHP](solution-3-php)

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