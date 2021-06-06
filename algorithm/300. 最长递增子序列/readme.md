### 300. 最长递增子序列

https://leetcode-cn.com/problems/longest-increasing-subsequence/

动态规划
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0)
    { 
        return 0
    }
    let dp = new Array(nums.length+1)
    dp.fill(1)
    let max = 0
    for (let i = 1; i < nums.length; i++)
    { 
        for (let j = 0; j < i; j++)
        {
            if (nums[j] < nums[i])
            { 
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
};
```
