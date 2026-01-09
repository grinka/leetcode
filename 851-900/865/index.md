# 865. Smallest Subtree with all the Deepest Nodes

- [Original Problem](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given the `root` of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the **deepest** if it has the largest depth possible among any node in the entire tree.

The **subtree** of a node is a tree consisting of that node, plus the set of all descendants of that node.

### Example 1:
![Example 1](image.png)

> **Input:** root = [3,5,1,6,2,0,8,null,null,7,4]\
> **Output:** [2,7,4]\
> **Explanation:** We return the node with value 2, colored in yellow in the diagram. The nodes coloured in blue are the deepest nodes of the tree. Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.

### Example 2:
> **Input:** root = [1]\
> **Output:** [1]\
> **Explanation:** The root is the deepest node in the tree.

### Example 3:
> **Input:** root = [0,1,3,null,2]\
> **Output:** [2]\
> **Explanation:** The deepest node in the tree is 2, the valid subtrees are the subtrees of nodes 2, 1 and 0 but the subtree of node 2 is the smallest.

### Constraints:
- The number of nodes in the tree will be in the range `[1, 500]`.
- `0 <= Node.val <= 500`
- The values of the nodes in the tree are **unique**.

**Note:** This question is the same as 1123: [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/)

## Solution

### Intuition
Let's imagine that for every node we know the maximum length of the subtree below. In this case for every node in the tree we can say:

- if left child has longer subtree (or right child does not exist), then smallest subtree with all deepest depth leaves is on the left
- if right child has longer subtree (or left child does not exist), then smallest subtree with all deepest depth leaves is on the right
- if both child nodes do not exist or their max subtree length values are equal, then current node is the root of the smallest subtree which has all deepest leaves. We can not find shorter subtree, because if we move to the left child, we loose all the leaves on the right and vice versa. Also if we move up to the parent, we keep all leaves, but subtree becomes one level bigger

As a result if we move from root node down, we can follow the simple pattern:

- if desired subtree on the left - pick the left child
- if it's on the right - pick the right child
- else, the current node is the answer

### Approach
1. First, create the function, which updates the maximum subtree depth for the node. If current node does not exist - returns 0. Else, sets the value to the max depth between left and right subtrees and returns this value + 1, so the current level also counted for the parent node.

2. Call the method for the root node, so all nodes in the tree has these values updated.

3. Initialize the "runner" node to point on the root.

4. Loop while runner node is not null (this only happens when root node is null).

5. For every step in the loop:
   - check if both left and right child nodes not exist. If so, return the current node - it's the only deepest leaf
   - get the max depth values for left and right child nodes with "null protection"
   - if left node is null or depth on the right is greater, set runner pointer to the right child
   - else if right node is null or depth on the left is greater, set runner pointer to the left child
   - else return the current node

6. After the loop return null. It covers the case when root node is null.

### Complexity
- **Time complexity:** O(n) where n is nodes count
- **Space complexity:** O(n) - we add one numeric value to every node

### Javascript
**Runtime: 0ms, Beats: 100%**

[Top](#865-smallest-subtree-with-all-the-deepest-nodes) |
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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    const setDepth = (node) => {
        if(!node) {
            return 0;
        }
        node.depth = Math.max(setDepth(node.left), setDepth(node.right));
        return node.depth + 1;
    }

    setDepth(root);

    let node = root;
    while(node !== null) {
        if(node.left === null && node.right === null) {
            return node; // deepest node in the subtree
        }
        const nl = (node.left?.depth ?? 0);
        const nr = (node.right?.depth ?? 0);

        if(node.left === null || nl < nr) {
            node = node.right;
        } else if(node.right === null || nr < nl) {
            node = node.left;
        } else {
            // both nodes exist and have same depth
            return node;
        }
    }

    return null;
};
```
