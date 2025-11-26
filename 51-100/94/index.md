# 94. Binary Tree Inorder Traversal

- [Original Problem](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

Given the `root` of a binary tree, return the inorder traversal of its nodes' values.

### Example 1:

![Example 1](image.png)

> **Input:** root = [1,null,2,3]\
> **Output:** [1,3,2]

### Example 2:

![Example 2](image-1.png)

> **Input:** root = [1,2,3,4,5,null,8,null,null,6,7,9]\
> **Output:** [4,2,6,5,7,1,3,9,8]

### Example 3:
> **Input:** root = []\
> **Output:** []

### Example 4:
> **Input:** root = [1]\
> **Output:** [1]

### Constraints:
- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

**Follow up:** Recursive solution is trivial, could you do it iteratively?

## Solution

### Javascript

[Top](#94-binary-tree-inorder-traversal) |
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let current = root;
    if(root == null) {
        return [];
    }
    if(root.left == null && root.right == null) {
        return [root.val];
    }
    
    let stack = [];
    let result = [];
    
    while(stack.length > 0 || current != null) {
        while(current != null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    
    return result;
};
```
