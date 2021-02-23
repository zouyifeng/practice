### 15. 三数之和

https://leetcode-cn.com/problems/3sum/

二分思想
```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = []
  if (Array.isArray(nums) && nums.length >= 3)
  { 
    // 数组长度
    const len = nums.length
    // 数组升序排序
    nums.sort((a, b) => a - b)
    // 遍历数组
    for (let i = 0; i < len; i++)
    { 
      // 如果i元素为正数，则无需继续。因为三数之和肯定为正数
      if (nums[i] > 0) break
      // 如果相邻的两个元素相同，则跳过，避免重复
      if (i > 0 && nums[i] === nums[i - 1]) continue
      // 范围为当下i右侧元素（均大于等于元素）
      // 左指针
      let L = i + 1
      // 右指针
      let R = len - 1
      // 当左指针小于右指针，未相遇
      while (L < R)
      {
        // 左指针元素，右指针元素，i元素之和
        const sum = nums[i] + nums[L] + nums[R]
        if (sum === 0)
        {
          ans.push([nums[i], nums[L], nums[R]])
          // 左指针元素和左+1指针元素相同，左指针左移
          while (L < R && nums[L] === nums[L + 1]) L++;
          // 右指针和右-1指针元素相同，右指针右移
          while (L < R && nums[R] === R - 1) R--;
          // 常规指针移动
          L++;
          R--;
        }
        // 如果和小于0，左指针移动
        else if (sum < 0) L++;
        // 如果和大于0，右指针移动
        else if (sum > 0) R--;
      }
    }
  }
  return ans
}
```


暴力
```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ret = []
  // 数组长度
  const len = nums.length
  // 数组排序
  nums.sort((a, b) => a - b)
  // 遍历数组
  for (let i = 0; i < len; i++) {
    // 如果i元素为正数，则无需继续。因为三数之和肯定为正数
    if (nums[i] > 0) break
    // 如果相邻的两个元素相同，则跳过，避免重复
    if (i > 0 && nums[i] === nums[i - 1]) continue
    // i+1 往后开始选择元素
    for (let j = i + 1; j < len; j++) {
      // 如果相同则跳过，进入下一个
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      for (let k = j + 1; k < len; k++) {
        // 如果相同则跳过，进入下一个
        if (k > j + 1 && nums[k] === nums[k - 1]) continue
        if (nums[k] + nums[j] + nums[i] === 0) {
          ret.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return ret
}
```


哈希表 + 循环  a+b = -c
```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ret = []
  const len = nums.length
  nums.sort((a, b) => a - b)
  let map = {}
  // 生成map，key为值，序号为value
  for (let i = 0; i < len; i++) {
    map[nums[i]] = i
  }
  for (let i = 0; i < len; i++) {
    // 如果i元素为正数，则无需继续。因为三数之和肯定为正数
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      const a = -1 * (nums[i] + nums[j])
      // 确保j+1的位置
      if (map[a] !== undefined && map[a] >= j + 1) {
        ret.push([nums[i], nums[j], a])
      }
    }
  }
  return ret
}
```