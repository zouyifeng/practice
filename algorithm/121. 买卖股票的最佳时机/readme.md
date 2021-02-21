121. 买卖股票的最佳时机

暴力法
```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0
  for (let i = 0; i < prices.length - 1; i++)
  {
    for (let j = i + 1; j < prices.length; j++)
    {
      if (prices[j] - prices[i] > maxProfit)
      {
        maxProfit = prices[j] - prices[i]
      }
    }
  }
  return maxProfit
};
```

动态规划
```
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
  dp.fill(new Array(2))

  dp[0][0] = 0
  dp[0][1] = -prices[0]


  for (let i = 1; i < len; i++)
  {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp[len - 1][0]
};
```