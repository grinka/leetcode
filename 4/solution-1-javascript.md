# 4. Median of Two Sorted Arrays

- [Problem](index)

## Javascript solution

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    if(m === 0 && n === 0) {
        return 0;
    }
    const j = Math.floor((n + m - 1) / 2);
    const joined = [];
    let i = 0, i1 = 0, i2 = 0, k = Math.min(nums1[0], nums2[0]);
    while(i1 < m || i2 < n) {
        if(i1 < m) {
            if(i2 >= n || nums2[i2] >= nums1[i1]) {
                k = nums1[i1];
                joined.push(k);
                i1++;
            } else {
                k = nums2[i2];
                joined.push(k);
                i2++;
            }
        } else {
            k = nums2[i2];
            joined.push(k);
            i2++;
        }
        i++;
    }
    return (joined[j] + joined[j + 1 - ((n + m) % 2)]) / 2;
};
```