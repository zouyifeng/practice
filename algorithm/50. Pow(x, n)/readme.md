### 50. Pow(x, n)

https://leetcode-cn.com/problems/powx-n/

两种情况
- n % 2 === 0
- n % 2 === 1

大问题化为子问题，x^n化为算x^n/2，x^n/2化为算x^n/4

递归 + 分治
```
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // n 等于 0，返回1
    if (n === 0) {
        return 1
    }
    // n 小于零，求倒数
    if (n < 0) {
        return 1/myPow(x, -n)
    }
    // n为奇数，化为n-1再运算
    if (n % 2 === 1) {
        return x * myPow(x, n-1)
    }
    // n 为偶数，则对半计算
    if (n % 2 === 0) {
        return myPow(x*x, n/2)
    }
};
```