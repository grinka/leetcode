# 3461. Check If Digits Are Equal in String After Operations I

- [Problem](index)

## Javascript solution

This solution is not optimal, but it's simple and easy to understand. We can use Pascal triangle for more efficient solution.

### Approach

- Split string into array, converting every digit to a number
- Store the right boundary of the array. It will be reduced on every step, so as soon as it goes down to 2, the final step is reached. This allows us to keep the same array - we don't need to remove the last element, just decrease the boundary index.
- Loop until the right boundary index greater than 2
  - Update all elements from 0 to current boundary index - 1 (the rightmost element used for calculation only)
  - For each element set it to be equal to the sum of this element and the next element in the array
  - If result is greater than 9, substract the 10 out of it. This is simple way to get the "module 10" without division, because division is expensive operation.
   - Decrement the right boundary index
- After loop is finished, compare first two elements of the resulting array


### Complexity: 

- Time Complexity: O(n<sup>2</sup>), where `n` is length of the string
- Space Complexity: O(n)

### Code

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    const list = [];
    let n = s.length;

    for(let i = 0; i < n; i++) {
        list.push(Number(s[i]));
    }
    while(n > 2) {
        for(let i = 0; i < n - 1; i++) {
            list[i] = (list[i] + list[i + 1]);
            if(list[i] > 9) {
                list[i] -= 10;
            }
        }
        n--;
    }

    return list[0] === list[1];
};
```