### 70. 爬楼梯

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