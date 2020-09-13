
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let shift = 0;
  for(let i = 1; i < nums.length; i++) {
      if(nums[i] == nums[i - 1 - shift]) {
          shift++;
      } else {
          if(shift > 0) {
              nums[i - shift] = nums[i];
          }
      }
  }
  return nums.length - shift;
};

if(process.argv.length != 3) {
  console.log(`'Wrong parameters.
Usage: node solution <numsarray>`);
  process.exit();
}

var scriptParams = process.argv.slice(2);
var arr = eval(scriptParams[0]);

console.log(removeDuplicates(arr));