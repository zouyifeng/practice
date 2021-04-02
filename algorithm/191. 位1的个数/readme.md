### 191. 位1的个数

- n & (n - 1) 消除最低位的1
- 直到为0

```js
var hammingWeight = function(n) {
    let count = 0
    while (n !== 0) {
        n = n & (n - 1)
        count++
    }
    return count
};
```