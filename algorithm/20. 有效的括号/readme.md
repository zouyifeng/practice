### 20. 有效的括号

栈
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 判断不合法情况
    if (s.length === 0 || s.length % 2 !== 0 ) {
        return false
    }
    // 构造map
    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = []
    // 例如 s='abc' i=0,1,2 s[0]='a' 
    for (let i in s) {
        let str = s[i]
        // 如果是左侧符号
        if (map[str]) {
            stack.push(str)
        } else {
            // 不是左侧符号，并且长度为0或者与栈顶符号不匹配
            if (stack.length === 0 || str !== map[stack.pop()]) {
                return false
            }
        }
    }
    // 返回栈是否空了，全部匹配上了
    return stack.length === 0
};
```


```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    do {
        length = s.length
        s = s.replace('{}', '').replace('[]', '').replace('()', '')
    } while(length !== s.length)
    return s.length === 0
};
```