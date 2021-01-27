### 232.用栈实现队列

```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0 || s.length % 2 !== 0 ) {
        return false
    }
    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = []
    for (let i in s) {
        let str = s[i]
        if (map[str]) {
            stack.push(str)
        } else {
            if (stack.length === 0 || str !== map[stack.pop()]) {
                return false
            }
        }
    }
    return stack.length === 0
};
```


```
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