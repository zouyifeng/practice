### 70. 爬楼梯

动态规划

爬第n阶楼梯的方法数量，等于 2 部分之和

爬上 n-1阶楼梯的方法数量。因为再爬1阶就能到第n阶、爬上 n-2 阶楼梯的方法数量，因为再爬2阶就能到第n阶

状态转移方程：f(x) = f(x-1) + f(x-1)


```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0 || n === 1 || n === 2) return n
    let stepWays = [1, 2]
    for (let i = 2; i < n; i++) {
        stepWays[i] = stepWays[i-1] + stepWays[i-2]
    }
    return stepWays[n-1]
};
```

类似斐波那契数列，递归求解（超时）
```
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if (n === 0 || n === 1 || n === 2) return n
    return climbStairs(n-1) + climbStairs(n-2)
};
```