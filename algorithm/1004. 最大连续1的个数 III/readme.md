### 1004. 最大连续1的个数 III

https://leetcode-cn.com/problems/max-consecutive-ones-iii/

此题可转换理解为：包含K个0的最长序列，转换为滑动窗口问题

```js
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  // 右指针
  let right = 0
  // 左指针
  let left = 0
  // 最大间距
  let max = 0
  // 0个数
  let zeros = 0
  // 当右指针未到末尾，继续循环
  while(right < A.length) {
    // 如果右指针元素为0
    if (A[right] === 0) {
      zeros++
    }
    // 当0的数目超过K，左指针右移，直到0的数量不超过K，才开始右移右指针
    while(zeros > K) {
      if(A[left++] === 0) {
        zeros--
      }
    }
    max = Math.max(max, right - left + 1)
    right++
  }
  return max
};
```
