# 104. Maximum Depth of Binary Tree

- [Original Problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
**Complexity: Easy**

Given the `root` of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Example 1:

![Example 1](image.png)

> **Input:** root = [3,9,20,null,null,15,7]\
> **Output:** 3

### Example 2:
> **Input:** root = [1,null,2]\
> **Output:** 2

### Constraints:
- The number of nodes in the tree is in the range [0, 10<sup>4</sup>].
- `-100 <= Node.val <= 100`

## Solution

### Javascript

[Top](#104-maximum-depth-of-binary-tree) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript |
    [C#](#c)
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
 * @return {number}
 */
var maxDepth = function(root) {
    const maxChildDepth = (node) => {
        if(!node) {
            return 0;
        }
        return Math.max(maxChildDepth(node.left), maxChildDepth(node.right)) + 1;
    }
    return maxChildDepth(root);
};
```

### C#

[Top](#104-maximum-depth-of-binary-tree) |
[Problem](#problem) |
[Solution](#solution) (<small>
    C# |
    [Javascript](#javascript)
</small>)

```csharp
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int MaxDepth(TreeNode root) {
        if(root == null) {
            return 0;
        }
        
        var leftDepth = MaxDepth(root.left);
        var rightDepth = MaxDepth(root.right);
        return 1 + (leftDepth > rightDepth ? leftDepth : rightDepth);
    }
}
```
