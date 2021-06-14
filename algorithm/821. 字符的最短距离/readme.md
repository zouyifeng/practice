### 821. 字符的最短距离

https://leetcode-cn.com/problems/shortest-distance-to-a-character/

```js
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let sArr = s.split('')
    let ret = []
    for (let i = 0; i < sArr.length; i++) {
        let min = Infinity
        for (let j = 0; j < sArr.length; j++) {
            if (sArr[j] === c) {
                min = Math.min(min, Math.abs(i-j))
            }
        }
        ret.push(min)
    }
    return ret
};
```