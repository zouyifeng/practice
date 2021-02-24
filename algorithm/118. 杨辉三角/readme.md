### 118. 杨辉三角

暴力
```
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ret = []
    for (let i = 0; i < numRows; i++) {
        // 初始行数组元素，赋值初始值1
        let row = new Array(i+1).fill(1)
        // 头尾不动，其余值从上一行取值并相加
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ret[i-1][j-1] + ret[i-1][j]
        }
        ret.push(row)
    }
    return ret
};
```