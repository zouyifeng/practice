### 69. x 的平方根

```
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) return x
  let l = 1
  let r = x
  let res = null
  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    if (m*m === x)
    {
      return m
    } else if (m*m > x)
    {
      r = m - 1
    } else
    { 
      l = m + 1
      res = m
    }
  }
  return res
};
```