### 18. 四数之和

https://leetcode-cn.com/problems/4sum/

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 原理与三数之和相同，多一层循环
var fourSum = function(nums, target) {
    const len = nums.length
    let ans = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < len; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            let L = j + 1
            let R = len - 1
            while (L < R) {
                const sum = nums[i] + nums[j] + nums[L] + nums[R] - target
                if (sum === 0) {
                    ans.push([nums[i], nums[j], nums[L], nums[R]])
                    while(L < R && nums[L] === nums[L+1]) L++
                    while(L < R && nums[R] === nums[R-1]) R--
                    L++
                    R--
                }
                // 如果和小于0，左指针移动
                else if (sum < 0) L++;
                // 如果和大于0，右指针移动
                else if (sum > 0) R--;
            }
        }
    }
    return ans
};
```