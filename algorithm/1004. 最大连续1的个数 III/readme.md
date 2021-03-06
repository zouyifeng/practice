### 1004. 最大连续1的个数 III

```
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let right = 0
    let left = 0
    let max = 0
    let zeros = 0
    while(right < A.length) {
        if (A[right] === 0) {
            zeros++
        }
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