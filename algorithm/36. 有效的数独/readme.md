### 36. 有效的数独

```
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = new Set()
  let col = new Set()
  let box = new Set()
  for (let i = 0; i < 9; i++)
  { 
    for (let j = 0; j < 9; j++)
    { 
      if (board[i][j] == '.') continue
      const currentNum = Number(board[i][j])
      if (row.has(`${i}${currentNum}`)) return false
      if (col.has(`${j}${currentNum}`)) return false
      if (box.has(`${parseInt(i/3)}${parseInt(j/3)}${currentNum}`)) return false
      
      row.add(`${i}${currentNum}`, true)
      col.add(`${j}${currentNum}`, true)
      box.add(`${parseInt(i/3)}${parseInt(j/3)}${currentNum}`, true)

    }
  }
  return true
};
```