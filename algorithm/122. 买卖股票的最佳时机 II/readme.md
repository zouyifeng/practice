### 122. 买卖股票的最佳时机 II


贪心策略：每个子问题的最优解，就是总问题的最优解
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let money = 0
    let buyPrice = null
    for(let i = 0; i < prices.length - 1; i++) {
      if (buyPrice === null) {
        if (prices[i] < prices[i+1]) {
          buyPrice = prices[i]
        }
      } 
      if (buyPrice !== null) {
        if (prices[i] > prices[i+1] ) {
          money += prices[i] - buyPrice
          buyPrice = null
        } else if ((i+1) === (prices.length-1)) {
          money += prices[i+1] - buyPrice
        }
        if (prices[i] < prices[i+1]) {
          continue
        }
      }
    }
    return money
};
```

深度优先
```js
```

动态规划 
```js
```