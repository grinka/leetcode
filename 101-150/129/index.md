# 129. Sum Root to Leaf Numbers

- [Original Problem](https://leetcode.com/problems/sum-root-to-leaf-numbers/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given the `root` of a binary tree containing digits from `0` to `9` only.

Each root-to-leaf path in the tree represents a number.

- For example, the root-to-leaf path `1 -> 2 -> 3` represents the number `123`.

Return *the total sum of all root-to-leaf numbers*. Test cases are generated so that the answer will fit in a **32-bit** integer.

A **leaf** node is a node with no children.

### Example 1:

![Example 1](image.png)

> **Input:** root = [1,2,3]\
> **Output:** 25\
> **Explanation:**\
> The root-to-leaf path `1->2` represents the number `12`.\
> The root-to-leaf path `1->3` represents the number `13`.\
> Therefore, sum = 12 + 13 = `25`.

### Example 2:

![Example 2](image-1.png)

> **Input:** root = [4,9,0,5,1]\
> **Output:** 1026\
> **Explanation:**\
> The root-to-leaf path `4->9->5` represents the number 495.\
> The root-to-leaf path `4->9->1` represents the number 491.\
> The root-to-leaf path `4->0` represents the number 40.\
> Therefore, sum = 495 + 491 + 40 = `1026`.

### Constraints:
- The number of nodes in the tree is in the range `[1, 1000]`.
- `0 <= Node.val <= 9`
- The depth of the tree will not exceed `10`.

## Solution

### Javascript

[Top](#129-sum-root-to-leaf-numbers) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

#### Approach 1: Accumulate Sum During DFS

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
var sumNumbers = function(root) {
    if(!root) {
        return 0;
    }
    let sum = 0;
    const addLeafs = (s, node) => {
        const nS = s * 10 + node.val;
        if(node.left === null && node.right === null) {
            sum += nS;
            return;
        }
        if(node.left) {
            addLeafs(nS, node.left);
        }
        if(node.right) {
            addLeafs(nS, node.right);
        }
    }
    addLeafs(0, root);
    return sum;
};
```

#### Approach 2: Build String Paths

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
var sumNumbers = function(root) {
    const nodeToLeaves = (node) => {
        const ret = [];
        if(node.left) {
            ret.push(...nodeToLeaves(node.left));
        }
        if(node.right) {
            ret.push(...nodeToLeaves(node.right));
        }
        if(!ret.length) {
            return [`${node.val}`];
        }
        return ret.map((x) => `${node.val}${x}`);
    }

    const list = nodeToLeaves(root);
    return list.reduce((s, c) => s + (+c), 0);
};
```
