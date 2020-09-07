```
try {
  interview(function (){
    console.log('smile')
  })
} catch (e) {
  console.log('cry', e)
}

function interview (callback) {
  setTimeout(() => {
    if (Math.random() < 0.1) {
      callback('success')
    } else {
      throw new Error('fail')
    }
  }, 500)
}
```

try catch 中捕获的异常，必须在同一个事件循环的调用栈内捕获。
setTimeout内的函数，是在另外个事件循环的调用栈内。
错误会被抛到全局

非阻塞IO、event loop 都属于libuv提供的能力

每个事件循环，都是全新的调用栈 
setTimeout(fun, 500)，fun成为了新的事件循环调用栈的底部

promise.all 中的catch，只会获得第一个throw的error