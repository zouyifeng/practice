### 338. 比特位计数

https://leetcode-cn.com/problems/counting-bits/

- i&(i-1) 移除i最低位1
- i 比 i&(i-1) 大
- arr[i] 1的个数比 arr[i&(i-1)] 多1

```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const len = num+1
    let arr = new Array(len)
    arr.fill(0)
    for (let i = 1; i <len; i++) {
        arr[i] = arr[i&(i-1)] + 1
    }
    return arr
};
```
