# 93. Restore IP Addresses

- [Original Problem](https://leetcode.com/problems/restore-ip-addresses/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

A valid IP address consists of exactly four integers separated by single dots. Each integer is between `0` and `255` (inclusive) and cannot have leading zeros.

- For example, `"0.1.2.201"` and `"192.168.1.1"` are valid IP addresses, but `"0.011.255.245"`, `"192.168.1.312"` and `"192.168@1.1"` are invalid IP addresses.

Given a string `s` containing only digits, return all possible valid IP addresses that can be formed by inserting dots into `s`. You are not allowed to reorder or remove any digits in `s`. You may return the valid IP addresses in any order.

### Example 1:
> **Input:** s = "25525511135"\
> **Output:** ["255.255.11.135","255.255.111.35"]

### Example 2:
> **Input:** s = "0000"\
> **Output:** ["0.0.0.0"]

### Example 3:
> **Input:** s = "101023"\
> **Output:** ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

### Constraints:
- `1 <= s.length <= 20`
- `s` consists of digits only.

## Solution

### Javascript

[Top](#93-restore-ip-addresses) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const parts = (s, count) => {
        if(s.length < count || s.length > count * 3) {
            return [];
        }
        if(count === 1) {
            return ((+s > 255) || (s[0] === '0' && s.length > 1)) ? [] : [s];
        }
        const p1 = parts(s.slice(1), count - 1).map(x => `${s[0]}.${x}`);
        const p2 = s[0] === '0' ? [] : parts(s.slice(2), count - 1).map(x => `${s.slice(0, 2)}.${x}`);
        const p3 = s[0] === '0' || +s.slice(0, 3) > 255 ? [] : parts(s.slice(3), count - 1).map(x => `${s.slice(0, 3)}.${x}`);
        return [...p1, ...p2, ...p3];
    }

    return parts(s, 4);
};
```
