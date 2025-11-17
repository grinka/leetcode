# 2011. Final Value of Variable After Performing Operations

- [Original Problem](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C# Version 1](#c-v1)
  - [C# Version 2](#c-v2-several-lines-faster)

## Problem
### Complexity: Easy

There is a programming language with only four operations and one variable X:

- `++X` and `X++` **increments** the value of the variable `X` by `1`.
- `--X` and `X--` **decrements** the value of the variable `X` by `1`.

Initially, the value of `X` is `0`.

Given an array of strings `operations` containing a list of operations, return the _**final**_ value of `X` after performing all the operations.


## Example 1:

> **Input:** operations = ["--X","X++","X++"]\
**Output:** 1\
**Explanation:** The operations are performed as follows:\
Initially, X = 0.\
--X: X is decremented by 1, X =  0 - 1 = -1.\
X++: X is incremented by 1, X = -1 + 1 =  0.\
X++: X is incremented by 1, X =  0 + 1 =  1.

## Example 2:

> **Input:** operations = ["++X","++X","X++"]\
**Output:** 3\
**Explanation:** The operations are performed as follows:\
Initially, X = 0.\
++X: X is incremented by 1, X = 0 + 1 = 1.\
++X: X is incremented by 1, X = 1 + 1 = 2.\
X++: X is incremented by 1, X = 2 + 1 = 3.

## Example 3:

> **Input:** operations = ["X++","++X","--X","X--"]\
**Output:** 0\
**Explanation:** The operations are performed as follows:\
Initially, X = 0.\
X++: X is incremented by 1, X = 0 + 1 = 1.\
++X: X is incremented by 1, X = 1 + 1 = 2.\
--X: X is decremented by 1, X = 2 - 1 = 1.\
X--: X is decremented by 1, X = 1 - 1 = 0.
 

## Constraints:

- `1 <= operations.length <= 100`
- `operations[i]` will be either `"++X"`, `"X++"`, `"--X"`, or `"X--"`.


## Solution

### Intuition
To perform correct operation, we need to determine, what kind of operation is it. We can compare the whole string, but it might be faster to compare only one character out of string. If first or last character equals to **'+'**, it's **'++X'** or **'X++'**. 

### Approach
Use standard `reduce` method to check every element of the array and collect the summary result.

### Complexity
- Time complexity: *O(n)* where `n` - size of the array.
- Space complexity: *O(1)*

## Javascript
[Top](#2011-final-value-of-variable-after-performing-operations) |
[Problem](#problem) |
[Solution](#solution) (
Javascript |
[C# V.1](#c-v1) |
[C# V.2](#c-v2-several-lines-faster) )


```javascript
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((s, c) => (c[0] === '+' || c[2] === '+') ? s + 1 : s - 1, 0);
};
```

## C# V.1
[Top](#2011-final-value-of-variable-after-performing-operations) |
[Problem](#problem) |
[Solution](#solution) (
[Javascript](#javascript) |
C# V.1 |
[C# V.2](#c-v2-several-lines-faster) )

Solution might be non-optimal, but it'one-liner

```csharp
public class Solution {
    public int FinalValueAfterOperations(string[] operations) => operations.Aggregate(0, (i, s) => (s[0] == '+' || s[2] == '+') ? i + 1 : i - 1);
}
```

## C# V.2. Several lines. Faster.
[Top](#2011-final-value-of-variable-after-performing-operations) |
[Problem](#problem) |
[Solution](#solution) (
[Javascript](#javascript) |
[C# V.1](#c-v1) |
C# V.2 )

This solution is faster, than previous one.
- Uses `foreach` instead of `Aggregate`
- Verifies only one char value instead of two

```csharp
public class Solution {
    public int FinalValueAfterOperations(string[] operations) {
        var x = 0;
        foreach(var op in operations) {
            x += (op[1] == '+') ? 1 : -1;
        }
        return x;
    }
}
```