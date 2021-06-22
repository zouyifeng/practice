### 53. 最大子序和


动态规划 dp[i] 为第i个元素为末尾的最大子序和
```js
var maxSubArray = function(nums) {
    const len = nums.length
    let dp = new Array(len)
    dp[0] = nums[0]
    let max = nums
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(nums[i], nums[i]+dp[i-1])
        max = Math.max(max, dp[i])
    }
    return max
}; 
```


暴力
```js
var maxSubArray = function(nums) {
    let max = -Infinity
    const len = nums.length
    if (len === 1) {
        max = nums[0]
    } else {
        for (let i = 0; i < len; i++) {
            let sum = nums[i]
            max = Math.max(sum, max)
            for (let j = i + 1; j < len; j++) {
                sum += nums[j]
                max = Math.max(sum, max)
            }
        }
    }
    return max
}; 
```
<!-- 
制定目标，让大脑有的放矢
不断挑战，培养游戏心态
发现奖赏，重拾生活的小确幸 -->