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
    if (typeof(collector[second]) != 'undefined') {
      return [collector[second], idx];
    } else {
      collector[elem] = idx;
    }
  }
  return [];
};

var scriptParams = process.argv.slice(2);
if (scriptParams.length != 2) {
  console.log(`'Wrong parameters.
Usage: node solution <numsarray> <number>
  `);
}

var arr = eval(scriptParams[0]);
var target = +scriptParams[1];

console.log(twoSum(arr, target));