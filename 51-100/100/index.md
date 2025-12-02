# 100. Same Tree

- [Original Problem](https://leetcode.com/problems/same-tree/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

### Example 1:
> **Input:** p = [1,2,3], q = [1,2,3]\
> **Output:** true

### Example 2:
> **Input:** p = [1,2], q = [1,null,2]\
> **Output:** false

### Example 3:
> **Input:** p = [1,2,1], q = [1,1,2]\
> **Output:** false

### Constraints:
- The number of nodes in both trees is in the range `[0, 100]`.
- -10<sup>4</sup> <= Node.val <= 10<sup>4</sup>

## Solution

### Javascript

[Top](#100-same-tree) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript
</small>)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const nodeHash = (node) => {
        if(!node) {
            return '';
        }
        return `${node.val}(${nodeHash(node.left)},${nodeHash(node.right)})`;
    }

    return nodeHash(p) === nodeHash(q);
};
```
