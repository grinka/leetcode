# 116. Populating Next Right Pointers in Each Node

- [Original Problem](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given a **perfect binary tree** where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

### Example 1:

![Example 1](image.png)

> **Input:** root = [1,2,3,4,5,6,7]\
> **Output:** [1,#,2,3,#,4,5,6,7,#]\
> **Explanation:** Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

### Example 2:
> **Input:** root = []\
> **Output:** []

### Constraints:
- The number of nodes in the tree is in the range [0, 2<sup>12</sup> - 1].
- `-1000 <= Node.val <= 1000`

**Follow-up:**
- You may only use constant extra space.
- The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

## Solution

### Javascript

[Top](#116-populating-next-right-pointers-in-each-node) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

```javascript
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root == null) {
        return root;
    }
    let first = root;
    while(first.left != null) {
        for(let current = first; current != null; current = current.next) {
            current.left.next = current.right;
            if(current.next != null) {
                current.right.next = current.next.left;
            }
        }
        
        first = first.left;
    }
    
    return root;
};
```
