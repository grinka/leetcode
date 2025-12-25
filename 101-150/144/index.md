# 144. Binary Tree Preorder Traversal

- [Original Problem](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Easy**

Given the `root` of a binary tree, return *the preorder traversal of its nodes' values*.

### Example 1:
![Example 1](image.png)

> **Input:** root = [1,null,2,3]\
> **Output:** [1,2,3]\
> **Explanation:**

### Example 2:
![Example 2](image-1.png)

> **Input:** root = [1,2,3,4,5,null,8,null,null,6,7,9]\
> **Output:** [1,2,4,5,6,7,3,8,9]\
> **Explanation:**

### Example 3:

> **Input:** root = []\
> **Output:** []

### Example 4:

> **Input:** root = [1]\
> **Output:** [1]

### Constraints:
- The number of nodes in the tree is in the range [0, 100]
- -100 <= Node.val <= 100

**Follow up:** Recursive solution is trivial, could you do it iteratively?

## Solution

### Javascript

[Top](#144-binary-tree-preorder-traversal) |
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
var preorderTraversal = function(root) {
    if(!root) return [];
    const ret = [];
    const stack = [root];
    while(stack.length > 0) {
        const next = stack.pop();
        ret.push(next.val);
        if(next.right) {
            stack.push(next.right);
        }
        if(next.left) {
            stack.push(next.left);
        }
    }
    return ret;
};
```
