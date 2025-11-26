# 95. Unique Binary Search Trees II

- [Original Problem](https://leetcode.com/problems/unique-binary-search-trees-ii/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

Given an integer `n`, return all the structurally unique BST's (binary search trees), which has exactly `n` nodes of unique values from `1` to `n`. Return the answer in any order.

### Example 1:

![Example 1](image.png)

> **Input:** n = 3\
> **Output:** [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

### Example 2:
> **Input:** n = 1\
> **Output:** [[1]]

### Constraints:
- `1 <= n <= 8`

## Solution

### Javascript

[Top](#95-unique-binary-search-trees-ii) |
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const ar = [];
    for(let i = 1; i <= n; i++) {
        ar.push(i);
    }

    const getSubArrays = (src) => {
        if(src.length === 1) {
            return [src];
        }
        const ret = [];
        for(let i in src) {
            const subSrc = [...src];
            const num = subSrc.splice(i, 1)[0];
            const subRet = getSubArrays(subSrc);
            for(let s of subRet) {
                ret.push([num, ...s]);
            }
        }
        return ret;
    }

    const allArrays = getSubArrays(ar);

    const buildTree = (arr) => {
        const ret = new TreeNode(arr[0]);
        for(let i = 1; i < arr.length; i++) {
            const v = arr[i];
            let curr = ret;
            while(true) {
                if(curr.val > v) {
                    if(curr.left) {
                        curr = curr.left;
                    } else {
                        curr.left = new TreeNode(v);
                        break;
                    }
                } else {
                    if(curr.right) {
                        curr = curr.right;
                    } else {
                        curr.right = new TreeNode(v);
                        break;
                    }
                }
            }
        }
        return ret;
    }

    const hash = (node) => {
        if(!node) {
            return 'null';
        }
        return `${node.val},${hash(node.left)},${hash(node.right)}`;
    }

    const ret = [];
    const hashes = new Set();
    for(let ar of allArrays) {
        const tree = buildTree(ar);
        const treeHash = hash(tree);
        if(!hashes.has(treeHash)) {
            hashes.add(treeHash);
            ret.push(tree);
        }
    }
    return ret;
};
```
