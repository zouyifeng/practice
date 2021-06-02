678. 有效的括号字符串

https://leetcode-cn.com/problems/valid-parenthesis-string/


1. 声明两个栈，分别存放 `(`和`*`
2. 遇到`)`，先用`(`抵消，如果没有`)`，就用`*`抵消，如果都没有，则return false
3. 如果`)`抵消完，剩下`(` `*`，则要`*`的位置大于`(`，并且数量上也要大

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let sArr = s.split('')
    let leftStack = []
    let startStack = []
    for (let i = 0; i<sArr.length; i++) {
        const current = sArr[i]
        if (current === '(' ) {
            leftStack.push(i)
        } else if (current === '*') {
            startStack.push(i)
        } else if(current === ')') {
            if (leftStack.length !== 0) {
                leftStack.pop()
                continue
            } else {
                if (startStack.length !== 0) {
                    startStack.pop()
                    continue
                } else {
                    return false
                }
            }
        }
    }
    if (leftStack.length > startStack.length) {
        return false
    }
    while (leftStack.length !== 0 && startStack.length !== 0) {
        if (leftStack.pop() > startStack.pop())  {
            return false
        }
    } 
    return true
};
```