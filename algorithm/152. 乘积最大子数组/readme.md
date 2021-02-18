### 152. 乘积最大子数组

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let imax = 1
    let imin = 1
    let max = -Infinity
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            [imax, imin] = [imin, imax]
        }
        imax = Math.max(nums[i] * imax, nums[i])
        imin = Math.min(nums[i] * imin, nums[i])
        max = Math.max(max, imax)
    }
    return max
};
```