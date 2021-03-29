### 322. 零钱兑换

https://leetcode-cn.com/problems/coin-change/



类似爬楼梯问题，一共n阶楼梯（兑换总价），一次可以走[x1, x2, x3]步，（币值x1, x2, x3），求最少步数（最少硬币）


定义dp方程： dp[i] => 走上第i阶梯花费的最少步数，dp[i] = min{dp[i-coins[j]]+1}


走到第i阶的最少步数，既是第i-coins[j]阶的最少步数加一（coins[j]为可选择的步数）


举例coins => [1,2,5]  amount => 11

i = 1:  dp[1] = min{dp[1-1]+1, d[1-2]+1, dp[1-5]+1} = dp[1-1]+1 = 1

i = 2:  dp[2] = min{dp[2-1]+1, dp[2-2]+1, dp[2-5]+1} = dp[0]+1 = 1

i = 3: dp[3] = min{dp[3-1]+1, dp[3-2]+1, dp[3-5]+1} = dp[2]+1 || dp[1]+1 = 2

...


当然不是每个阶梯都会有最少步数，比方coins[2, 5]， dp[3]无值


dp
```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const max = amount + 1;
  let dp = new Array(max);
  dp.fill(max)
  dp[0] = 0
  for (let i = 1; i <= amount; i++)
  {
    for (let j = 0; j < coins.length; j++)
    {
      if (coins[j] <= i)
      {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
```
