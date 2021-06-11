const fs = require('fs');

// 定义一个 wait 方法
function wait (mstime) {
  let date = Date.now();
  while (Date.now() - date < mstime) {
    // do nothing
  }
}

// 读取本地文件 操作IO
function asyncOperation (callback) {
  fs.readFile(__dirname + '/' + __filename, callback);
}

const lastTime = Date.now();

// setTimeout
setTimeout(() => {
  console.log('timers', Date.now() - lastTime + 'ms');
}, 100);

// process.nextTick
process.nextTick(() => {
  // 进入event loop
  // timers阶段之前执行
  wait(20);
  asyncOperation(() => {
    console.log('poll');
  });  
});

/**
 * timers 21ms
 * poll
 */
