# 17. Letter Combinations of a Phone Number

- [Original Problem](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![Keys Map](image.png)
 

### Example 1:

> **Input:** digits = "23"\
> **Output:** ["ad","ae","af","bd","be","bf","cd","ce","cf"]

### Example 2:

> **Input:** digits = "2"\
> **Output:** ["a","b","c"]
 

### Constraints:

- `1 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.

## Solution
### Javascript

[Top](#17-letter-combinations-of-a-phone-number) | [Problem](#problem)

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) {
        return [];
    }
    const letters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    const addOneDigit = (list, digit) => {
        const ret = [];
        for(let l of letters[digit]) {
            const app = list.map(x => `${x}${l}`);
            ret.push(...list.map(x => `${x}${l}`));
        }
        return ret;
    }

    let ret = [''];
    for(let d of digits) {
        ret = addOneDigit(ret, d);
    }
    return ret;
};
```