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

### 模型
```
   ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<─────┤  connections, │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

#### timers 
一个timer具有下限时间，poll阶段控制执行

#### I/O callbacks
系统操作的回调

#### poll阶段
1. 执行到达下限的timer回调
2. 没有timer
- poll队列不为空，event loop 遍历并同步执行回调，直至队列清空
- poll队列为空，1、如果被setImmediate设置回调，结束poll阶段，进入check阶段，执行check队列。2、无setImmediate设置回调，则阻塞在该阶段等待回调被加入 poll 队列，并立即执行。

#### check阶段
poll阶段结束后立即执行回调。setImmediate的回调

[参考](https://juejin.cn/post/6844903999506923528)