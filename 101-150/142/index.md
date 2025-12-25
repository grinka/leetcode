# 142. Linked List Cycle II

- [Original Problem](https://leetcode.com/problems/linked-list-cycle-ii/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given the `head` of a linked list, return *the node where the cycle begins*. If there is no cycle, return `null`.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to **(0-indexed)**. It is `-1` if there is no cycle. **Note that `pos` is not passed as a parameter**.

**Do not modify** the linked list.

### Example 1:
![Example 1](image.png)

> **Input:** head = [3,2,0,-4], pos = 1\
> **Output:** tail connects to node index 1\
> **Explanation:** There is a cycle in the linked list, where tail connects to the second node.

### Example 2:
![Example 2](image-1.png)

> **Input:** head = [1,2], pos = 0\
> **Output:** tail connects to node index 0\
> **Explanation:** There is a cycle in the linked list, where tail connects to the first node.

### Example 3:
![Example 3](image-2.png)

> **Input:** head = [1], pos = -1\
> **Output:** no cycle\
> **Explanation:** There is no cycle in the linked list.

### Constraints:
- The number of the nodes in the list is in the range [0, 10<sup>4</sup>]
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>
- pos is -1 or a valid index in the linked-list

**Follow up:** Can you solve it using O(1) (i.e. constant) memory?

## Solution

### Javascript

[Top](#142-linked-list-cycle-ii) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head, slow = head;
    while(true) {
        if(!fast || !fast.next) {
            return null;
        }
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) {
            break;
        }
    }
    fast = head;
    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
```
