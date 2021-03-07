### 1323. 6 和 9 组成的最大数字

```js
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numStr = String(num)
    return numStr.replace('6', '9')
};
```