### 485. 最大连续 1 的个数

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let imax = 0
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            imax++
        } else if (nums[i] === 0) {
            imax = 0
        }
        max = Math.max(imax, max)
    }
    return max
};
```