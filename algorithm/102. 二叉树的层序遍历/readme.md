### 102. 二叉树的层序遍历


BFS
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    let list = [root]
    let result = []
    while(list.length !== 0) {
        const length = list.length
        let level = []
        for (let i = 0; i < length; i++) {
            const node = list.shift()
            if (node) {
                level.push(node.val)
                if (node.left) {
                    list.push(node.left)
                }
                if (node.right) {
                    list.push(node.right)
                }
            }
        }
        result.push(level)
    }
    return result
};
```