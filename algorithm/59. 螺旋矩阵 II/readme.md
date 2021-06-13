### 59. 螺旋矩阵 II

```js
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = new Array(n)
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n)
    }
    let left = 0
    let top = 0
    let right = n - 1
    let bottom = n - 1
    let current = 1
    while(true) {
        for (let i = left; i <= right; i++) matrix[top][i] = current++
        if (++top > bottom) break
        for (let i = top; i <= bottom; i++) matrix[i][right] = current++
        if (--right < left) break
        for (let i = right; i >= left; i--) matrix[bottom][i] = current++
        if (--bottom < top) break
        for (let i = bottom; i >= top; i--) matrix[i][left] = current++
        if (++left > right) break
    }
    return matrix
};
```
