# 3370. Smallest Number With All Set Bits

- [Original Problem](https://leetcode.com/problems/smallest-number-with-all-set-bits/description/)
- [Solution](#solution)
- [Approach 1](#approach-1)
  - [C# Version](#c-solution-1---one-line)
  - [Javascript Version](#javascript-solution-1---one-line)
- [Approach 2](#approach-2)
  - [C# Version](#c-solution-2---loop)
  - [Javascript Version](#javascript-solution-2---loop)

## Problem
### Complexity: Easy

You are given a _positive_ number `n`.

Return the **smallest** number `x` **greater than** or **equal to** `n`, such that the binary representation of `x` contains only set bits


## Example 1:

> **Input:** n = 5\
> **Output:** 7\
> **Explanation:**\
> The binary representation of 7 is `"111"`.

## Example 2:

> **Input:** n = 10\
> **Output:** 15\
> **Explanation:**\
> The binary representation of 15 is `"1111"`.

## Example 3:

> **Input:** n = 3\
> **Output:** 3\
> **Explanation:**\
> The binary representation of 3 is `"11"`.

## Constraints:

- `1 <= n <= 1000`

## Solution

### Intuition
The result number should have all bits set to 1, so it equals to 2 in some power - 1.

For example,
- 8 = 2<sup>3 </sup> = `1000` in binary notation. `8-1=7` that is `111`
- 16 = 2<sup>4</sup> = `10000` in binary notation. `16-1=15` that is `1111`

So we need to find the smallest number which is a power of two, which is greater than `n` and substract 1 out of it to get the answer.

To do so we can use `log2` method which finds the power whic should e applied to `2` to get the current number. We need to have the number greater than `n`, so we use `log2(n + 1)`.

For example, `log2(5 + 1) = 2.584962500721156`. Round this number up, so we get integer power which gives us number which is equal or greater than `n + 1`.

Then we apply this power on `2` and return the result - 1;

<!-- Describe your first thoughts on how to solve this problem. -->

## Approach 1
- Get the log2 for the `n+1`
- Round it up
- Calculate power of 2
- Return the calculated number - 1

### Complexity
- Time complexity: *O(log(n))* - we suppose that `Math.log2` calculates the logarithm of n in `log(n)` time
- Space complexity: *O(1)*

## C# V.1 - one line
[Top](#3370-smallest-number-with-all-set-bits) |
[Problem](#problem) |
[Solution](#solution) |
[Approach 1](#approach-1) (
C# |
[Javascript](#javascript-solution-1---one-line) ) |
[Approach 2](#approach-2) (
[C#](#c-solution-2---loop) |
[Javascript](#javascript-solution-2---loop) )

```csharp
public class Solution {
    public int SmallestNumber(int n) => 
        (int)Math.Pow(2, Math.Ceiling(Math.Log2(n + 1))) - 1;
}
```

## Javascript V.1 - one line
[Top](#3370-smallest-number-with-all-set-bits) |
[Problem](#problem) |
[Solution](#solution) |
[Approach 1](#approach-1) (
[C#](#c-solution-1---one-line) |
Javascript ) |
[Approach 2](#approach-2) (
[C#](#c-solution-2---loop) |
[Javascript](#javascript-solution-2---loop) )

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = (n) => Math.pow(2, Math.ceil(Math.log2(n + 1))) - 1;
```

The second approach might be even faster, but longer.

## Approach 2

Instead of calculating exact logarithm of `n + 1`, we can find the integer power of `2` which is strictly greater than `n`. Do it in a loop, starting with `1` and doubling number on every step. To make calculation faster, it's possible to use binary shift left instead of multiplication. Binary operations are usually cheaper.

After finding the value which is greater than `n`, return this value - 1.

### C# V.2 - loop
[Top](#3370-smallest-number-with-all-set-bits) |
[Problem](#problem) |
[Solution](#solution) |
[Approach 1](#approach-1) (
[C#](#c-solution-1---one-line) |
[Javascript](#javascript-solution-1---one-line) ) |
[Approach 2](#approach-2) (
C# |
[Javascript](#javascript-solution-2---loop) )

```csharp
public class Solution {
    public int SmallestNumber(int n) {
        var res = 1;
        while(res <= n) {
            res = res << 1;
        }
        return res - 1;
    }
}
```

### Javascript V.2 - loop
[Top](#3370-smallest-number-with-all-set-bits) |
[Problem](#problem) |
[Solution](#solution) |
[Approach 1](#approach-1) (
[C#](#c-solution-1---one-line) |
[Javascript](#javascript-solution-1---one-line) ) |
[Approach 2](#approach-2) (
[C#](#c-solution-2---loop) |
Javascript )

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = (n) => {
    let r = 1;
    while(r <= n) {
        r <<= 1;
    }
    return r - 1;
};
```
