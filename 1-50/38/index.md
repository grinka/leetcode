# 38. Count and Say

- [Original Problem](https://leetcode.com/problems/count-and-say/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
### Complexity: Medium

The **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:

- `countAndSay(1) = "1"`
- `countAndSay(n)` is the run-length encoding of `countAndSay(n - 1)`.

Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string `"3322251"` we replace `"33"` with `"23"`, replace `"222"` with `"32"`, replace `"5"` with `"15"` and replace `"1"` with `"11"`. Thus the compressed string becomes `"23321511"`.

Given a positive integer `n`, return _the n<sup>th</sup> element of the **count-and-say** sequence_.

 

### Example 1:

> **Input:** n = 4\
> **Output:** "1211"\
> **Explanation:**\
>
> countAndSay(1) = "1"\
> countAndSay(2) = RLE of "1" = "11"\
> countAndSay(3) = RLE of "11" = "21"\
> countAndSay(4) = RLE of "21" = "1211"

### Example 2:

> **Input:** n = 1\
> **Output:** "1"\
> **Explanation:**\
> This is the base case.

### Constraints:

- `1 <= n <= 30`

## Solution
### Javascript

[Top](#38-count-and-say) | [Problem](#problem)

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const nextStep = (line) => {
        let res = [];
        let lastDigit = -1, lastCount = 0;
        for(let b of line) {
            if(b !== lastDigit) {
                if(lastDigit !== -1) {
                    if(lastCount > 9) {
                        res.push(Math.floor(lastCount / 10));
                    }
                    res.push(lastCount % 10);
                    res.push(lastDigit);
                }
                lastCount = 1;
                lastDigit = b;
            } else {
                lastCount++;
            }
        }
        if(lastCount > 9) {
            res.push(Math.floor(lastCount / 10));
        }
        res.push(lastCount % 10);
        res.push(lastDigit);
        return res;
    }

    let res = [1];
    for(let i = 1; i < n; i++) {
        res = nextStep(res);
    }

    return res.join('');
};
```
