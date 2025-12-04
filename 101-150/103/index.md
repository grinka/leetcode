# 103. Binary Tree Zigzag Level Order Traversal

- [Original Problem](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

### Example 1:
> **Input:** root = [3,9,20,null,null,15,7]\
> **Output:** [[3],[20,9],[15,7]]

### Example 2:
> **Input:** root = [1]\
> **Output:** [[1]]

### Example 3:
> **Input:** root = []\
> **Output:** []

### Constraints:
- The number of nodes in the tree is in the range `[0, 2000]`.
- `-100 <= Node.val <= 100`

## Solution

### Javascript

[Top](#103-binary-tree-zigzag-level-order-traversal) |
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) {
        return [];
    }
    const levels = [];
    const stack = [[root, 0]];
    while(stack.length > 0) {
        const [node, level] = stack[0];
        stack.splice(0, 1);
        levels[level] = levels[level] || [];
        levels[level].push(node.val);
        if(node.left) {
            stack.push([node.left, level + 1]);
        }
        if(node.right) {
            stack.push([node.right, level + 1]);
        }
    }
    for(let i = 1; i < levels.length; i+=2) {
        levels[i].reverse();
    }
    return levels;
};
```
