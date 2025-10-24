# 11. Container With Most Water

- [Problem](index)

## Javascript Solution

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1, res = 0;
    while(l < r) {
        res = Math.max(res, (r - l) * Math.min(height[l], height[r]));
        if(height[l] < height[r]){
            l++;
        } else {
            r--;
        }
    }

    return res;
};
```
