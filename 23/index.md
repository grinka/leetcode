# 23. Merge k Sorted Lists

- [Original Problem](https://leetcode.com/problems/merge-k-sorted-lists/description/)
- [Solution](#solution)
  - [Javacript](#javascript)

## Problem
### Complexity: Hard

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

_Merge all the linked-lists into one sorted linked-list and return it_.

### Example 1:

> **Input:** lists = [[1,4,5],[1,3,4],[2,6]]\
> **Output:** [1,1,2,3,4,4,5,6]\
> **Explanation:** The linked-lists are:\
> [\
>  1->4->5,\
>  1->3->4,\
>  2->6\
> ]\
> merging them into one sorted linked list:\
> 1->1->2->3->4->4->5->6

### Example 2:

> **Input:** lists = []\
> **Output:** []

### Example 3:

> **Input:** lists = [[]]\
> **Output:** []
 
### Constraints:

- `k == lists.length`
- 0 <= k <= 10<sup>4</sup>
- `0 <= lists[i].length <= 500`
- -10<sup>4</sup> <= lists[i][j] <= 10<sup>4</sup>
- `lists[i]` is sorted in **ascending order**.
- The sum of `lists[i].length` will not exceed 10<sup>4</sup>.

## Solution
### Javascript

[Top](#23-merge-k-sorted-lists) | [Problem](#problem)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const m = [];
    for(let i = 0; i < lists.length; i++) {
        for(let n = lists[i]; !!n; n = n.next) {
            m.push(n.val);
        }
    }
    m.sort((a, b) => b-a);
    let n = null;
    for(let i of m) {
        n = new ListNode(i, n);
    }
    return n;
};
```