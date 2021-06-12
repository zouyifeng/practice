### 235. 二叉搜索树的最近公共祖先

https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

最近的公共祖先，一定是两个节点分布在左子树和右子树

其他的公共祖先，一定是两个节点都分布在同一侧（也就是最近公共祖先往上走的节点）


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
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }  
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    return root
};
```
