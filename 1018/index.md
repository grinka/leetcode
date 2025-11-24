# 1018. Binary Prefix Divisibly By 5

- [Original Problem](https://leetcode.com/problems/binary-prefix-divisible-by-5/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

You are given a binary array `nums` **(0-indexed)**.

We define x<sub>i</sub> as the number whose binary representation is the subarray `nums[0..i]` (from most-significant-bit to least-significant-bit).

- For example, if `nums = [1,0,1]`, then x<sub>0</sub> = 1, x<sub>1</sub> = 2, and x<sub>2</sub> = 5.

Return _an array of booleans `answer` where `answer[i]` is `true` if x<sub>i</sub> is divisible by `5`_.

### Example 1:

> **Input:** nums = [0,1,1]\
> **Output:** [true,false,false]\
> **Explanation:** The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.\
Only the first number is divisible by 5, so answer[0] is true.

### Example 2:

> **Input:** nums = [1,1,1]\
> **Output:** [false,false,false]

### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- nums[i] is either 0 or 1.

## Solution

### Intuition

The simplest way is to build the number every time and check if it's divisible by 5. The trick here: when we build the next number, we can reuse te number built one step before, because it uses same bits just on higher position. So for numbers

- `[1, 0, 1]`
- `[1, 0, 1, 1]`

we can get the second number out off the first just moving all bits one position left and adding `1`. If second numbmer was `[1, 0, 1, 0]` we need to add `0`.

For every bit we need to
- get previous number
- shift all bits to the left one time
- add value of the current bit

How could we handle overflows for big numbers?

Really we don't need the whole numbers - we need to know if it's divisible by 5.  We can keep the reminder every time and we can check that on every step we'll have same reminder value as if we carried whole number.

Let's say we have number `x` which is `y*5 + r`. We perform the operation with this number and we get `(x*2) + 1 = y*5*2 + r*2 + 1`.  If we divide the result by 5, reminder will be same as for `r*2 + 1` (because first part, `y*5*2` is divisible by 5 without any reminder).

> Remark: shifting all bits to the left one time equals to multiplying the number by 2.

So to avoid overflow, we can simply keep the reminder, not the whole number.

### Javascript

[Top](#1018-binary-prefix-divisibly-by-5) | [Problem](#problem)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = (nums, cur = 0) => nums.map((n) => !(cur = ((cur << 1) + n) % 5));
```

Another implementation of the same algorythm. Maybe easier to read

```javascript
var prefixesDivBy5 = function(nums) {
    const result = [];
    let cur = 0;
    for(let n of nums) {
        cur = ((cur << 1) + n) % 5;
        result.push(cur === 0);
    }

    return result;
};
```