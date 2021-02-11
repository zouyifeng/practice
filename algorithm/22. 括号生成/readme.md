### 22. 括号生成

递归 + 剪枝
```
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = []
  gen(0, 0, n, '')
  return ret

  function gen (left, right, n, result) {
    if (left === n && right === n) {
      ret.push(result)
      return
    }
    if (left < n) {
      gen(left + 1, right, n, result + '(')
    }
    if (left > right && right < n) {
      gen(left, right  + 1, n, result + ')')
    }
  }
};
```