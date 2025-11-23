# 57. Insert Interval

- [Original Problem](https://leetcode.com/problems/insert-interval/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the i<sup>th</sup> interval and intervals is sorted in ascending order by start<sub>i</sub>. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by start<sub>i</sub> and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` _after the insertion_.

Note that you don't need to modify `intervals` in-place. You can make a new array and return it.

### Example 1:

> **Input:** intervals = [[1,3],[6,9]], newInterval = [2,5]\
> **Output:** [[1,5],[6,9]]

### Example 2:

> **Input:** intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\
> **Output:** [[1,2],[3,10],[12,16]]\
> **Explanation:** Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 
### Constraints:

- 0 <= intervals.length <= 10<sup>4</sup>
- intervals[i].length == 2
- 0 <= starti <= endi <= 10<sup>5</sup>
- intervals is sorted by starti in ascending order.
- newInterval.length == 2
- 0 <= start <= end <= 10<sup>5</sup>

## Solution
### Javascript

[Top](#57-insert-interval) | [Problem](#problem)

```javascript
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) {
        return [newInterval];
    }
    let fI = -1;
    let lI = -1;
    for(let i = 0; i < intervals.length; i++) {
        if(intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0]) {
            fI = i;
        } 
        if(intervals[i][0] <= newInterval[1] && intervals[i][1] >= newInterval[1]) {
            lI = i;
        }
    }
    const start = fI === -1 ? newInterval[0] : intervals[fI][0];
    const end = lI === -1 ? newInterval[1] : intervals[lI][1];

    var result = [];
    for(let [s, e] of intervals) {
        if((s > end || s < start) && (e > end || s < start)) {
            result.push([s,e]);
        }
    }
    result.push([start, end]);
    result.sort((a,b) => a[0] - b[0]);

    return result;
};
```