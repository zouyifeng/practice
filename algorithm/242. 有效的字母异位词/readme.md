### 242. 有效的字母异位词

思路一 排序对比

```
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (typeof s !== 'string' &&
        typeof t !== 'string' && 
        s.length !== t.length) {
        return false
    }
    const sArr = s.split('')
    const tArr = t.split('')
    sArr.sort((a, b) => a.localeCompare(b))
    tArr.sort((a, b) => a.localeCompare(b))

    return sArr.join() === tArr.join()
};
```

思路二 