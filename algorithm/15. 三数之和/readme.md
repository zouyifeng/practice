### 15. 三数之和

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
    const len = nums.length
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++)
    { 
      if (nums[i] > 0) break
      if (i > 0 && nums[i] === nums[i - 1]) continue
      let L = i + 1
      let R = len - 1
      while (L < R)
      {
        const sum = nums[i] + nums[L] + nums[R]
        if (sum === 0)
        {
          ans.push([nums[i], nums[L], nums[R]])
          while (L < R && nums[L] === nums[L + 1]) L++;
          while (L < R && nums[R] === R - 1) R--;
          L++;
          R--;
        }
        else if (sum < 0) L++;
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
var threeSum = function(nums) {
  let ret = []
  const len = nums.length
  nums.sort((a, b) => a-b)
  for (let i = 0; i<len; i++) {
      if (nums[i] > 0) break
      if (i>0 && nums[i] === nums[i-1]) continue
      for(let j=i+1; j<len; j++) {
          if(j>i+1 && nums[j] === nums[j-1]) continue
          for(let k=j+1; k<len; k++) {
              if (k > j+1 && nums[k] === nums[k-1]) continue
              if (nums[k] + nums[j] + nums[i] === 0) { 
                  ret.push([nums[i] , nums[j] , nums[k]])
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
var threeSum = function(nums) {
  let ret = []
  const len = nums.length
  nums.sort((a, b) => a-b)
 let map = {}
 for (let i = 0; i<len; i++) {
     map[nums[i]] = i
 }
  for (let i = 0; i<len; i++) {
      if (nums[i] > 0) break
      if (i>0 && nums[i] === nums[i-1]) continue
      for(let j=i+1; j<len; j++) {
        if(j>i+1 && nums[j] === nums[j-1]) continue
        const a = -1*(nums[i] + nums[j])
        if (map[a] !== undefined && map[a] >= j+1) {
            ret.push([nums[i] , nums[j], a])
        }
      }
  }
  return ret
}
```