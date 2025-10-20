# 1. Two Sum

- [Problem](index)
- [Solution 2. C#](solution-2-csharp)


## Javascript solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let collector = {};
  for(idx = 0; idx < nums.length; idx++) {
    const elem = nums[idx];
    const second = target - elem;
    if (typeof(collector[second]) !== 'undefined') {
      return [collector[second], idx];
    } else {
      collector[elem] = idx;
    }
  }
  return [];
};
```

## Javascript solution, use Map

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indicies = new Map();
    for(let i = 0; i < nums.length; i++) {
        const pair = target - nums[i];
        if(indicies.has(pair)) {
            return [indicies.get(pair), i];
        }
        indicies.set(nums[i], i);
    }

    return [];
};
```