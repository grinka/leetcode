# 717. 1-bit and 2-bit Characters

- [Original Problem](https://leetcode.com/problems/1-bit-and-2-bit-characters/description/)

## Problem
### Complexity: Easy

We have two special characters:

- The first character can be represented by one bit `0`.
- The second character can be represented by two bits (`10` or `11`).

Given a binary array `bits` that ends with `0`, return `true` if the last character must be a one-bit character.

### Example 1:

> **Input:** bits = [1,0,0]\
> **Output:** true\
> **Explanation:** The only way to decode it is two-bit character and one-bit character.\
So the last character is one-bit character.

### Example 2:

> **Input:** bits = [1,1,1,0]\
> **Output:** false\
> **Explanation:** The only way to decode it is two-bit character and two-bit character.\
So the last character is not one-bit character.

### Constraints:

- `1 <= bits.length <= 1000`
- `bits[i]` is either `0` or `1`.

## Solution

### Intuition

Let's assume that array has valid set of biits, containing first and second characters only. So we ignore all invalid combinations like `[1]` or `[1,0,1]` and so on.

If last bit of the array is `1`, it means that last character is second one.

Second character should start with `1`. From that we can understand, that if we have `0` bit in the array - it's the last bit of the first or second character. So we can consider an array consist of 3 parts

1. Some set of bits, ending with `0`. It contains some set of first and second characters - we don't need them.
2. Set of bits with value `1` - it might be empty
3. Last `0` bit

Let's see several examples

- `[...0, 0]` - last bit could belong only to the first character
- `[... 0, 1, 0]` - last bit might belong to the second character `10`
- `[... 0, 1, 1, 0]` - last bit can be only first character.

Explanation\
For the array `[... 0, 1, 1, 0]`. Lets check last 4 bits from left to right

- `0` - ending bit of previous character (first or second, does not mater)
- `1` + `1` - might only be second character, because first character does not have `1`s
- `0` - first character

Following same pattern we can understand that if we have even count of `1` before trailing `0`, they can represent set of second characters `11` and then only one `0` left which has to represent last first character.

If we have odd count, than we have set of second characters `11` + `10` at the end. What also represents the second character.

**Bottomline:** if we count the `1`s before last `0` we can say: if quantity is even - last character has to be first one. If it's odd, it should be second.

### Approach

- Check "border" condition for last bit to equal to `1`. If so, return `false` - last character could not be the first one.
- Initialize `ones` counter with `0` value.
- Loop from the end to the start of the array, starting from the second bit. Repeat the loop while bit is `1`.
  - On every step increment the `ones` counter.
- Return boolean value "counter is even". For efficiency we can use bit operation here - "AND" with 1 and check if result equals to 1 (instead of checking the division reminder)

### Complexity
- Time complexity: _O(n)_ - where n is the length of the array. This situation happens if all bits in the array are  `1` except the last one
- Space complexity: _O(1)_

### Javascript

```javascript
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if(bits.at(-1) === 1) {
        return false;
    }
    let ones = 0;
    for(let i = bits.length - 2; i >= 0 && bits[i] === 1; i--) {
        ones++;
    }
    return ((ones & 1) !== 1);
};
```