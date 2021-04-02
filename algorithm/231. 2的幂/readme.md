### 231. 2的幂

- 2的幂，即是2进制位数上仅有1个1
- n&(n-1) 消除最低位的1
```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 &&  (n&(n-1)) === 0
};
```