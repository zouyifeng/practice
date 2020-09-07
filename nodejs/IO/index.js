const glob = require('glob')

// 9.072ms
// var result = null
// console.time('glob')
// result = glob.sync(__dirname + '/**/*')
// console.timeEnd('glob')
// console.log(result.length)

// 2.981ms
var result = null
console.time('glob')
glob(__dirname + '/**/*', function (err, res) {
  result = res
  console.log(res.length)
})
console.timeEnd('glob')
console.log(1 + 1)