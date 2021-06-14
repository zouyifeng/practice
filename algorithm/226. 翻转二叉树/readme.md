### 226. 翻转二叉树

https://leetcode-cn.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */
var invertTree = function(node) {
    if (node) {
        const left = node.left
        node.left = node.right
        node.right = left
        invertTree(node.left)
        invertTree(node.right)
    }
    return node
};
```