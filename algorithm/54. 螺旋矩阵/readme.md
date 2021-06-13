### 54. 螺旋矩阵

https://leetcode-cn.com/problems/spiral-matrix/


```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    let ret = []

    while(1) {
        for (let i = left; i <= right; i++) ret.push(matrix[top][i])
        if(++top > bottom) break
        for (let i = top; i <= bottom; i++) ret.push(matrix[i][right])
        if (--right < left) break
        for (let i = right; i >= left; i--) ret.push(matrix[bottom][i])
        if (--bottom < top) break
        for (let i = bottom; i >= top; i--) ret.push(matrix[i][left])
        if (++left > right) break
    }
    return ret
};
```

