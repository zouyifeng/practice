### 236. 二叉树的最近公共祖先

递归，参考[二叉树后序遍历](https://github.com/zouyifeng/practice/blob/master/algorithm/%E4%BA%8C%E5%8F%89%E6%A0%91/index.js#L98)
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root.val === p.val || root.val === q.val) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    return left === null ? right : right === null ? left : root
};
```