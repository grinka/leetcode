# Intuition
If we first sort the array in accending order and then for each position find the minimum possible new value (n - k <= ... <= n + k) greater than previous, we build the new array with maximum possible number of distinct elements.

# Approach
Sort the array in accending order.

Set the `result` value to 0 and `last` value to `k - 1`. It guarantees, that `nums[0] - k > last` because all numbers are positive.

`last` shoud keep the last new distinct value and it's the biggest one.

Loop over all elements
- Compare that `n - k > last`. 
  - It means that even if we substract the `k` from the current number, we get the new distinct element, which is greater than the last one.
  - increment result (we found new distinct number)
  - set the `last` to the `n - k` - the smallest distinct value we can generate
- Else compare the `n + k > last`. 
  - It means that there exists some distinct number from the interval `[n - k ... n + k]` which is greater than `last`. 
  - This is the new distinct value we can calculate. Let's select the smallest possible - `last + 1`. 
  - increment result
  - set the `last = last + 1`
- If none of the previous conditions satisfied, it means that smallest possible distinct number is already greater than `n + k` so even if we don't have any new distinct number we can generate. Skip the number and go to the next.


# Complexity
- Time complexity: *O(m)* where `m` is the length of the array

- Space complexity: *O(1)*

# Code
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    nums.sort((a, b) => a - b);
    let last =  - k - 1, result = 0;
    for(let n of nums) {
        if(n - k > last) {
            result++;
            last = n - k;
        } else if(n + k > last) {
            result++;
            last++;
        }
    }

    return result;
};
```