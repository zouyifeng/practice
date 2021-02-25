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

类似斐波那契数列，递归求解（超时），递归存在大量重复计算，需要缓存部分计算结果，空间换时间
![img](../docs/递归低效.png)
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



尾递归优化（原理与变量替换相同）  // TODO 原理理解与普通递归区别
```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return climb(n, 0, 1)
};

function climb(n, s1, s2) {
    if (n === 0) {
        return s2
    }
    return climb(n-1, s2, s1+s2)
}
```

变量替换
```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let i = 0, j = 1, sum = 0
    for (let p = 0; p < n; p++) {
        sum = i + j
        i = j
        j = sum
    }
    return sum
};
```
