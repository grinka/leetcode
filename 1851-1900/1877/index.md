# 1877. Minimize Maximum Pair Sum in Array

- [Original Problem](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given an array `nums` of even length. Pair the elements of `nums` into `n / 2` pairs such that each element is in exactly one pair, and the pair sum is the sum of the two elements in a pair. The maximum pair sum is the largest pair sum among all pairs.

Return the minimized maximum pair sum after optimally pairing the elements.

### Example 1:
> **Input:** [3,5,2,3]\
> **Output:** 7\
> **Explanation:** Pair (3,3) and (5,2). Maximum pair sum = max(6,7) = 7.

### Constraints:
- `2 <= nums.length <= 10^5`
- `nums.length` is even
- `1 <= nums[i] <= 10^5`

## Solution

### Javascript
**Runtime: 88ms, Beats: 99**

[Top](#1877-minimize-maximum-pair-sum-in-array) | [Problem](#problem) | [Solution](#solution) (<small>Javascript</small>)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
	let maxVal = 1;
	for(let i = 0; i < nums.length; i++) {
		maxVal = Math.max(nums[i], maxVal);
	}
	const freq = Array(maxVal + 1).fill(0);
	for(let n of nums) {
		freq[n]++;
	}
	let max = 0, l = 0; r = maxVal;
	while(l <= r) {
		while(freq[l] === 0 && l <= r) {
			l++;
		}
		while(freq[r] === 0 && l <= r) {
			r--;
		}
		if(l > r) {
			return max;
		}

		max = Math.max(max, l + r);
		freq[l]--;
		freq[r]--;
	}

	return max;
};
```
