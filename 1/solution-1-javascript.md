[Detailed problem desription](description)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let collector = {};
  for(idx = 0; idx < nums.length; idx++) {
    elem = nums[idx];
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