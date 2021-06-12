### 111. 二叉树的最小深度


https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

BFS
```js
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
    let deep = 0
    if (!root) {
        return deep
    }
    let tree = [root]
    while(tree.length !== 0) {
        const len = tree.length
        ++deep
        for (let i = 0; i < len; i++) {
            let node = tree.shift()
            if (node.left){
                tree.push(node.left)
            }
            if (node.right) {
                tree.push(node.right)
            }
            if (!node.left && !node.right) {
                return deep
            }
        }
    }
    return deep
};
```

DFS
```js
// TODO
```
