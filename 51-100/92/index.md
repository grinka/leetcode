# 92. Reverse Linked List II

- [Original Problem](https://leetcode.com/problems/reverse-linked-list-ii/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

### Example 1:

![Example 1](image.png)

> **Input:** head = [1,2,3,4,5], left = 2, right = 4\
> **Output:** [1,4,3,2,5]

### Example 2:

> **Input:** head = [5], left = 1, right = 1\
> **Output:** [5]
 
### Constraints:

- The number of nodes in the list is `n`.
- `1 <= n <= 500`
- `-500 <= Node.val <= 500`
- `1 <= left <= right <= n`

### Follow up:
- Could you do it in one pass?

## Solution
### Javascript

[Top](#92-reverse-linked-list-ii) |
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const c = [];
    for(let n = head; n !== null; n = n.next) {
        c.push(n);
    }
    const [l, r] = [left - 1, right - 1];
    for(let i = r; i > l; i--) {
        c[i].next = c[i - 1];
    }
    if(r < c.length - 1) {
        c[l].next = c[r + 1];
    } else {
        c[l].next = null;
    }
    if(l > 0) {
        c[l - 1].next = c[r];
        return c[0];
    } else {
        return c[r];
    }
};
```
