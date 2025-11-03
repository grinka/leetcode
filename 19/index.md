# 19. Remove Nth Node From Ed of List

- [Original Problem](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem

Given the `head` of a linked list, remove the n<sup>th</sup> node from the end of the list and return its head.

### Example 1:

![Example 1](image.png)

> **Input:** head = [1,2,3,4,5], n = 2\
> **Output:** [1,2,3,5]

### Example 2:

> **Input:** head = [1], n = 1\
> **Output:** []

### Example 3:

> **Input:** head = [1,2], n = 1\
> **Output:** [1]
 

### Constraints:

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

## Solution
### Approach

The problem can be solved using two pointers. First pointer moves forward and second one follows `n+1` nodes "back". So when first pointer reaches last node, second pointer will be pointing to the node, exactly one step before the node to be removed. After that it's enought to reset the `next` pointer to point to the `next.next` what will remove the "next" node.

### Javascript
[Top](#19-remove-nth-node-from-ed-of-list) |
[Problem](#problem) |
[Solution](#solution) (
Javascript |
[C#](#c) )

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let r = head;
    if(n === 1) {
        if(!r.next) {
            return null;
        }
        while(r.next.next) {
            r = r.next;
        }
        r.next = null;
        return head;
    }
    for(let i = 0; i < n; i++) {
        r = r.next;
    }
    if(!r) {
        return head.next;
    }
    let l = head;
    while(r.next) {
        r = r.next;
        l = l.next;
    }
    l.next = l.next.next;
    return head;
};
```

### C#

[Top](#19-remove-nth-node-from-ed-of-list) |
[Problem](#problem) |
[Solution](#solution) (
[Javascript](#javascript) |
C# )

```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        var runner = head;
        var follower = head;
        for(var i = 0; i<n; i++) {
            runner = runner.next;
        }
        if(runner == null) {
            return head.next;
        }
        
        runner = runner.next;
        
        while(runner != null) {
            runner = runner.next;
            follower = follower.next;
        }
        
        follower.next = follower.next.next;
        return head;
        
    }
}
```