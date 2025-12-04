# 102. Binary Tree Level Order Traversal

- [Original Problem](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [Solution](#solution)
  - [C#](#c)

## Problem
**Complexity: Medium**

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

### Example 1:

![Example 1](image.png)

> **Input:** root = [3,9,20,null,null,15,7]\
> **Output:** [[3],[9,20],[15,7]]

### Example 2:
> **Input:** root = [1]\
> **Output:** [[1]]

### Example 3:
> **Input:** root = []\
> **Output:** []

### Constraints:
- The number of nodes in the tree is in the range `[0, 2000]`.
- `-1000 <= Node.val <= 1000`

## Solution

### C#

[Top](#102-binary-tree-level-order-traversal) |
[Problem](#problem) |
[Solution](#solution) (<small>
    C#
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
    public IList<IList<int>> LevelOrder(TreeNode root) {
        if(root == null) {
            return new List<IList<int>>();
        }
        var nextLevel = new Queue<TreeNode>();
        nextLevel.Enqueue(root);
        var process = nextLevel;
        IList<IList<int>> result = new List<IList<int>>();
        
        while(nextLevel.Count > 0) {
            process = nextLevel;
            nextLevel = new Queue<TreeNode>();
            IList<int> levelVals = new List<int>();
            while(process.Count > 0) {
                var item = process.Dequeue();
                if(item.left != null) {
                    nextLevel.Enqueue(item.left);
                }
                if(item.right != null) {
                    nextLevel.Enqueue(item.right);
                }
                levelVals.Add(item.val);
            }
            result.Add(levelVals);
        }
        
        return result;
    }
}
```
