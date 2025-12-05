# 111. Minimum Depth of Binary Tree

- [Original Problem](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

### Example 1:

![Example 1](image.png)

> **Input:** root = [3,9,20,null,null,15,7]\
> **Output:** 2

### Example 2:
> **Input:** root = [2,null,3,null,4,null,5,null,6]\
> **Output:** 5

### Constraints:
- The number of nodes in the tree is in the range [0, 10<sup>5</sup>].
- `-1000 <= Node.val <= 1000`

## Solution

### Javascript

[Top](#111-minimum-depth-of-binary-tree) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) {
        return 0;
    }

    let min = Infinity;
    const dsp = (node, level) => {
        if(!node.left && !node.right) {
            min = Math.min(min, level);
            return;
        }
        if(node.left) {
            dsp(node.left, level + 1);
        }
        if(node.right) {
            dsp(node.right, level + 1);
        }
    }
    dsp(root, 1);
    return min;
};
```
