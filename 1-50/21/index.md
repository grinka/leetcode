# 21. Merge Two Sorted Lists

- [Original Problem](https://leetcode.com/problems/merge-two-sorted-lists/description/)
- [Solution](#solution)
  - [C#](#c)
  - [Javascript](#javascript)

## Problem
### Complexity: easy

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return __the head of the merged linked list__.

### Example 1:

![Example 1](image.png)

> **Input:** list1 = [1,2,4], list2 = [1,3,4]\
> **Output:** [1,1,2,3,4,4]

### Example 2:

> **Input:** list1 = [], list2 = []\
> **Output:** []

### Example 3:

> **Input:** list1 = [], list2 = [0]\
> **Output:** [0]
 

### Constraints:

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

## Solution

### C#
[Top](#21-merge-two-sorted-lists) |
[Problem](#problem) |
[Solution](#solution) (
C# |
[Javascript](#javascript) )

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
    public ListNode MergeTwoLists(ListNode l1, ListNode l2) {
        if(l1 == null) return l2;
        if(l2 == null) return l1;
        
        var root = new ListNode();
        var current = root;
        
        while(l1 != null && l2 != null) {
            if(l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = l1 == null ? l2 : l1;
        
        return root.next;
    }
}
```

### Javascript

[Top](#21-merge-two-sorted-lists) |
[Problem](#problem) |
[Solution](#solution) (
[C#](#c) |
Javascript )

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null) {
        return list2;
    }
    if(list2 === null) {
        return list1;
    }

    let root = new ListNode(), current = root;
    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 ?? list2;

    return root.next;
};
```