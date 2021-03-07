### 22. 括号生成

递归搜索（深度优先搜索） + 剪枝  时间复杂度 o(2^n)
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = []
  gen(0, 0, n, '')
  return ret

  // left  左边括号用了多少个
  // right 右边括号用了多少个
  function gen (left, right, n, result) {
    // 左右括号都用完了
    if (left === n && right === n) {
      ret.push(result)
      return
    }
    // 当生成'('、'(('、'((('的过程中，均有')'与之匹配。并在匹配过程中延伸其他可能
    // 加左括号
    if (left < n) {
      gen(left + 1, right, n, result + '(')
    }
    // 加右括号 + 剪枝（左括号的数量大于右括号）
    if (left > right && right < n) {
      gen(left, right  + 1, n, result + ')')
    }
  }
};
```

递归搜索（深度优先搜索）+ 去掉不合法的  时间复杂度o(2^2n)
```js
var generateParenthesis = function(n) {
    let ret = []
    gen(0, 0, n, '')
    return ret.filter(i => isValid(i))

    function gen (left, right, n, result) {
      console.log('left -> ' + left + ' right-> ' + right + ' n-> ' + n + ' result-> ' + result)
        if (left === n && right === n) { 
            ret.push(result)
            return
        }
        if (left < n) {
            gen(left + 1, right, n, result + '(')
        }
        if (right < n) {
            gen(left, right  + 1, n, result + ')')
        }
    }

    var isValid = function(s) {
        do {
            length = s.length
            s = s.replace('{}', '').replace('[]', '').replace('()', '')
        } while(length !== s.length)
        return s.length === 0
    };
};


```

> 剪枝是搜索中常用的优化操作