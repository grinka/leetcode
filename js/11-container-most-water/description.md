## Problem description

https://leetcode.com/problems/container-with-most-water/

## Bruteforce idea

The bruteforce idea is pretty simple: 
- one index runs from left to right.
- then the second index runs from the current position to the end of the array
- for every pair we calculate the area of the rectangle: `min(height_left, height_right) * (right - left)`
- if new area is greater then previousely calculated max value, store it

The time complexity of the solution is:
`n+(n-1)+(n-2)+...+1` which is `n*(n-1)/2` = `O(n^2)`

The space complexity is a constant.

## Solution

### Briteforce optimized

We will follow same approach - move the indexes and check if new area is greater, that previous max value

Let's look at this example

```
      x 
    x x       x
x   x x   x   x
x x x x x x x x
```

Imagine, that we found the greatest rectangle for the left index 0.
```
      x 
    x x       x
x - - - - - - x
x x x x x x x x
^             ^
```
When we increment the left counter, the next height is 1 (less, than for index 0)
So we can state: the greatest possible area for the new left index could not be greater, than the value we calculated on the previous step, because else we could use the same rectangle PLUS the left column.

As soon as we calculated the greatest value for one left index, we don't need to check the areas for all next left indexes where height is less than previous. In out case we need to calculate the values for left indexes `0`, `2` and `3`

We can try to reuse same idea for the right index (moving from right to left) with one additional restriction. The height of the rectangle can not be greater than the height of the left index. So if we found right index, where height is equal or greater than the height of the left border, we don't need to move the right index further - we already found the widest rectangle of the maximum possible height.

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length < 2){
        return 0;
    }
    let l = -1;
    let maxL = -1;
    let a = 0;
    while(l < height.length) {
        if(l === -1) {
            l = 0;
        } else {
            while(l < height.length && height[l] <= maxL) {
                l++;
            }
        }
        maxL = height[l];
        if(l >= height.length - 1) {
            return a;
        }
        
        let r = height.length - 1;
        let maxR = height[r];
        a = Math.max(a, (r-l) * Math.min(height[r], height[l]));
        
        while((r > l) && (height[r] <= height[l])) {
            if(height[r] <= maxR) {
                r--;
            } else {
                maxR = height[r];
                a = Math.max(a, (r-l) * Math.min(height[r], height[l]));
            }
        }
        a = Math.max(a, (r-l) * Math.min(height[r], height[l]));
    }
    
    return a;
};
```

### Optimal solution

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length < 2){
        return 0;
    }
    let l = 0;
    let r = height.length - 1;
    let a = 0;
    
    while(l < r) {
        a = Math.max(a, (r-l) * Math.min(height[r], height[l]));
        if(height[r] > height[l]) {
            l++;
        } else {
            r--;
        }
    }
    return a;
};
```

The main idea is : get the widest possible rectangle. Then reduce the width trying to find the highest possible borders. To do it - always change the smallest border - left or right.
