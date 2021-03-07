### 309. 最佳买卖股票时机含冷冻期

dp
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    if (len < 2)
    { 
        return 0
    }
    let dp = new Array(len)
    //   dp.fill(new Array(3))
    for (let j = 0; j < dp.length; j++) {
        dp[j] = new Array(3)
    }
        
    dp[0][0] = 0  // 不持股
    dp[0][1] = -prices[0]  // 持股
    dp[0][2] = 0  // 冷冻期

    for (let i = 1; i < len; i++)
    {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2])  // i天不持股状态来源 -> i-1不持股、i-1冷冻期
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])  // i天持股状态来源 -> i-1不持股  i-1持股
        dp[i][2] = dp[i - 1][1] + prices[i]  // i冷冻期来源 -> i-1持股并卖出
    }
    return Math.max(dp[len - 1][0], dp[len - 1][2]);
};
```