### 98. 验证二叉搜索树


https://leetcode-cn.com/problems/validate-binary-search-tree/

中序遍历
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
 * @return {boolean}
 */
var isValidBST = function(node) {
    let list = []
    if (node) {
        let stack = []
        while(stack.length !== 0 || node) {
            if (node) {
                stack.push(node)
                node = node.left
            } else {
                node = stack.pop()
                list.push(node.val)
                node = node.right
            }
        }
    }
    if (list.length === 0) {
        return true
    } else {
        return list.every((val, index) => {
            if (index > 0) {
                return list[index-1] < list[index]
            } else {
                return true
            }
        })
    }
};
```

递归
```js
var isValidBST = function(node) {
  return helper(node, -Infinity, Infinity)
};

function helper (root, lower, upper) {
  if (!root) {
      return true
  }
  if (root.val <= lower || root.val >= upper) {
      return false
  }
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}
```
