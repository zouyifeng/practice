非阻塞IO

```
// 9.072ms
var result = null
console.time('glob')
result = glob.sync(__dirname + '/**/*')
console.timeEnd('glob')
console.log(result.length)
```

```
// 2.981ms
var result = null
console.time('glob')
glob(__dirname + '/**/*', function (err, res) {
  result = res
  console.log(res.length)
})
console.timeEnd('glob')
console.log(1 + 1)
```

两端代码可看出非阻塞IO的高效，不影响下面代码流程