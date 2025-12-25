# 143. Reorder List

- [Original Problem](https://leetcode.com/problems/reorder-list/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given the head of a singly linked-list. The list can be represented as:

L<sub>0</sub> → L<sub>1</sub> → … → L<sub>n - 1</sub> → L<sub>n</sub>

*Reorder the list to be on the following form:*

L<sub>0</sub> → L<sub>n</sub> → L<sub>1</sub> → L<sub>n - 1</sub> → L<sub>2</sub> → L<sub>n - 2</sub> → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

### Example 1:
![Example 1](image.png)

> **Input:** head = [1,2,3,4]\
> **Output:** [1,4,2,3]

### Example 2:
![Example 2](image-1.png)

> **Input:** head = [1,2,3,4,5]\
> **Output:** [1,5,2,4,3]

### Constraints:
- The number of nodes in the list is in the range [1, 5 * 10<sup>4</sup>]
- 1 <= Node.val <= 1000

## Solution

### Javascript

[Top](#143-reorder-list) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const arrList = [];
    for(let item = head; item !== null; item = item.next) {
        arrList.push(item);
    }

    const n = arrList.length;
    const h = Math.floor(n / 2);
    for(let i = 0; i < h; i++) {
        const r = arrList[i];
        r.next = arrList[n - i  - 1];
        r.next.next = arrList[i + 1];
    }

    arrList[h].next = null;

    return head;
};
```
