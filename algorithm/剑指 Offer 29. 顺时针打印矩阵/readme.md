### 剑指 Offer 29. 顺时针打印矩阵

https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix || matrix.length === 0) {
    return []
  }

  const rows = matrix.length, columns = matrix[0].length
  const order = []
  // 数组下标，上下左右起点
  let left = 0, right = columns - 1, top = 0, bottom = rows - 1
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) { 
      order.push(matrix[top][column])
    }
    for (let row = top + 1; row <= bottom; row++) { 
      order.push(matrix[row][right])
    }
    // 如果left等于right 或 top等于bottom，说明左右方向 或 上下方向只剩下一列 或 一行
    // 不能走下面流程，会重复录入
    if (left < right && top < bottom) { 
      for (let column = right - 1; column > left; column--) { 
        order.push(matrix[bottom][column])
      }
      for (let row = bottom; row > top; row--) { 
        order.push(matrix[row][left])
      }
    }
    // 一圈一圈走完，向内部递进
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return order
}
```