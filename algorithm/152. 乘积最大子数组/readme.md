### 152. 乘积最大子数组

https://leetcode-cn.com/problems/maximum-product-subarray/


![img](../docs/顺时针打印矩阵.png) 

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let imax = 1   // 阶段性乘积最大累计
    let imin = 1   // 阶段性乘积最小累计
    let max = -Infinity
    for(let i = 0; i < nums.length; i++) {
        // 如果i元素为负数，则需要变量互换，因为相乘后，imax变最小，imin变最大
        if (nums[i] < 0) {
            [imax, imin] = [imin, imax]
        }
        // 比较乘积和下一个数的大小，如果相乘反而变小，则从头开始
        imax = Math.max(nums[i] * imax, nums[i])
        // 比较乘积和下一个数的大小，如果相乘反而变大，则从头开始
        imin = Math.min(nums[i] * imin, nums[i])
        // max 为最终结果，不断与阶段性乘积imax比较，并且赋值
        max = Math.max(max, imax)
    }
    return max
};
```