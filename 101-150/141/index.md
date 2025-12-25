# 141. Linked List Cycle

- [Original Problem](https://leetcode.com/problems/linked-list-cycle/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
**Complexity: Easy**

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

### Example 1:
![Example 1](image.png)

> **Input:** head = [3,2,0,-4], pos = 1\
> **Output:** true\
> **Explanation:** There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

### Example 2:
![Example 2](image-1.png)

> **Input:** head = [1,2], pos = 0\
> **Output:** true\
> **Explanation:** There is a cycle in the linked list, where the tail connects to the 0th node.

### Example 3:
![Example 3](image-2.png)

> **Input:** head = [1], pos = -1\
> **Output:** false\
> **Explanation:** There is no cycle in the linked list.

### Constraints:
- The number of the nodes in the list is in the range [0, 10<sup>4</sup>]
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>
- pos is -1 or a valid index in the linked-list

**Follow up:** Can you solve it using O(1) (i.e. constant) memory?

## Solution

### Javascript

[Top](#141-linked-list-cycle) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript |
    [C#](#c)
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null || head.next === null || head.next.next === null) {
        return false;
    }
    let f = head, s = head.next, t = head.next.next;
    while(f !== s && f !== t && s !== t) {
        if(t.next == null || t.next.next == null || t.next.next.next == null) {
            return false;
        }
        f = f.next;
        s = s.next.next;
        t = t.next.next.next;
    }
    return true;
};
```

### C#

[Top](#141-linked-list-cycle) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript](#javascript) |
    C#
</small>)

```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public bool HasCycle(ListNode head) {
        var slow = head;
        var fast = head;
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if(fast == null) {
                return false;
            }
            if(slow == fast || slow == fast.next) {
                return true;
            }
        }
        return false;
    }
}
```
