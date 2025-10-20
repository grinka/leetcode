# 2011. Final Value of Variable After Performing Operations

- [Problem](index)
- [Solution 2. C#](solution-2-csharp)

## Javascript Solution


# Intuition
To perform correct operation, we need to determine, what kind of operation is it. We can compare the whole string, but it might be faster to compare only one character out of string. If first or last character equals to **'+'**, it's **'++X'** or **'X++'**. 

# Approach
Use standard `reduce` method to check every element of the array and collect the summary result.

# Complexity
- Time complexity: $$O(n)$$ where `n` - size of the array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((s, c) => (c[0] === '+' || c[2] === '+') ? s + 1 : s - 1, 0);
};
```