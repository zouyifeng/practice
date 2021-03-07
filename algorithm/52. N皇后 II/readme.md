### 52. N皇后 II

与`51. N 皇后`类似

```js
var totalNQueens = function(n) {
  let result = []
  let cols = new Set()
  let pie = new Set()
  let na = new Set()
  DFS(n, 0 , []) 

  function DFS(n, row, currentState) {
    if (row >= n) {
      // console.log(currentState)
      result.push(currentState)
      return
    }
    for(let col = 0; col < n; col++) {
      if (currentState.includes(col) || pie.has(row + col) || na.has(row - col)) {
        continue
      }
      cols.add(col)
      pie.add(row + col)
      na.add(row - col)
  
      DFS(n, row + 1, [...currentState, col])
  
      cols.delete(col)
      pie.delete(row + col)
      na.delete(row - col)
    }
  }

  function generate(list, n) {
    let ret = []
    list.forEach(item => {
      let temp = []
      item.forEach((j, index) => {
      let str = new Array(n).fill('.')
      str.splice(j, 1, 'Q')
      temp.push(str.join(''))
      })
      ret.push(temp)
    })
    return ret ? ret.length : 0
  }
  return generate(result, n)
}
```