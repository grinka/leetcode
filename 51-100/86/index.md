# 86. Partition List

- [Original Problem](https://leetcode.com/problems/partition-list/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given the `head` of a linked list and a value `x`, partition it such that all nodes less than `x` come before nodes greater than or equal to `x`.

You should preserve the original relative order of the nodes in each of the two partitions.

### Example 1:

![Example 1](image.png)

> **Input:** head = [1,4,3,2,5,2], x = 3\
> **Output:** [1,2,2,4,3,5]

### Example 2:

> **Input:** head = [2,1], x = 2\
> **Output:** [1,2]
 
### Constraints:

- The number of nodes in the list is in the range `[0, 200]`.
- `-100 <= Node.val <= 100`
- `-200 <= x <= 200`

## Solution
### Javascript

[Top](#86-partition-list) |
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let [s, s1, f, f1] = [null, null, null, null];
    for(let i = head; !!i; i = i.next) {
        if(i.val < x) {
            if(f === null) {
                f = i;
            } else {
                f1.next = i;
            }
            f1 = i;
        } else {
            if(s === null) {
                s = i;
            } else {
                s1.next = i;
            }
            s1 = i;
        }
    }
    if(s1) {
        s1.next = null;
    }
    if(f1) {
        f1.next = s;
    } else {
        f = s;
    }
    return f;
};
```
