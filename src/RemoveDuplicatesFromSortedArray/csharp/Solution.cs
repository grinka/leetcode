public class Solution {
    public int RemoveDuplicates(int[] nums) {
        var shift = 0;
        for(var idx = 1; idx < nums.Length; idx++) {
            if(nums[idx] == nums[idx - 1 - shift]) {
                shift++;
            } else {
                if(shift > 0) {
                    nums[idx - shift] = nums[idx];
                }
            }
        }
        return nums.Length - shift;
    }
}