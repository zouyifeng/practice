### 746. 使用最小花费爬楼梯

动态规划
```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const len = cost.length
    const dp = new Array(len+1)
    dp.fill(Infinity)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for(let i = 2; i <= len; i++) {
        const temp  = (cost[i] || 0)
        const min = Math.min(dp[i-1], dp[i-2])
        dp[i] = min + temp
    }
    return dp[len]
};
```