### 36. 有效的数独

https://leetcode-cn.com/problems/valid-sudoku/


思路：遍历每个方块，声明空间记录行、列、方块，记录下每个遇到的值，并且判断是否存在

方块用parseInt(i/3)，parseInt(j/3)来记录   0，1，2 -> 0    3，4，5 -> 1   6，7，8 -> 2

```
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 记录行中出现的值
  let row = new Set()
  // 记录列中出现的值
  let col = new Set()
  // 记录方块中出现的值
  let box = new Set()

  // 开始遍历方块
  for (let i = 0; i < 9; i++)
  { 
    for (let j = 0; j < 9; j++)
    { 
      if (board[i][j] == '.') continue
      const currentNum = Number(board[i][j])
      if (row.has(`${i}${currentNum}`)) return false
      if (col.has(`${j}${currentNum}`)) return false
      if (box.has(`${parseInt(i/3)}${parseInt(j/3)}${currentNum}`)) return false
      
      row.add(`${i}${currentNum}`)
      col.add(`${j}${currentNum}`)
      box.add(`${parseInt(i/3)}${parseInt(j/3)}${currentNum}`)

    }
  }
  return true
};
```