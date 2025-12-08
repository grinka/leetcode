# 124. Binary Tree Maximum Path Sum

- [Original Problem](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Hard**

A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence **at most once**. Note that the path does not need to pass through the root.

The **path sum** of a path is the sum of the node's values in the path.

Given the `root` of a binary tree, return *the maximum **path sum** of any **non-empty** path*.

### Example 1:

![Example 1](image.png)

> **Input:** root = [1,2,3]\
> **Output:** 6\
> **Explanation:** The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

### Example 2:

![Example 2](image-1.png)

> **Input:** root = [-10,9,20,null,null,15,7]\
> **Output:** 42\
> **Explanation:** The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

### Constraints:
- The number of nodes in the tree is in the range [1, 3 * 10<sup>4</sup>].
- `-1000 <= Node.val <= 1000`

## Solution

### Javascript

[Top](#124-binary-tree-maximum-path-sum) |
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
var maxPathSum = function(root) {
    if(!root) { return 0; }
    let maxSub = root.val;
    const subsum = (node) => {
        if(!node) {
            return 0;
        }
        const l = subsum(node.left);
        const r = subsum(node.right);
        if(l+r+node.val > maxSub) {
            maxSub = l+r+node.val;
        }
        const newVal = node.val + Math.max(l, r);
        return newVal > 0 ? newVal : 0;
    }
    subsum(root);
    return maxSub;
};
```
