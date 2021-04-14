###  大数相加

```js
function add (a, b){
  const len1 = a.length
  const len2 = b.length
  const maxLen = Math.max(len1, len2)
  // 取最大长度补全，使得两个数字字符串长度相等
  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')
  // 最终返回的结果字符串
  let sum = ''
  // 某一位数上相加的和
  let total = 0
  // 某一位数上相加的和需要进的位数
  let f = 0
  // 从低位开始相加
  for (let i = maxLen-1; i >=0; i--) {
    // 某一位数上的和 加上 后面的进位
    total = parseInt(a[i]) + parseInt(b[i]) + f
    // 产生的进位
    f = Math.floor(total/10)
    // 当前的结果字符串。total有两种可能：1、大于10，需要进位   2、小于10，无需进位
    sum = total%10 + sum
  }

  // 最后一次计算结果，如果产生进位，则f为1，需要添加到头部
  if (f === 1) {
    sum = f + sum
  }
  return sum
}

```