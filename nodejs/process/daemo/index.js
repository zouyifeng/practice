const cluster = require('cluster');
if (cluster.isMaster) {
  // cluster.fork()
  // cluster.fork()
  // cluster.fork()

  for (let i = 0; i < 3;i++) {
    const worker = cluster.fork()
    let missingPing = 0
    let inter = setInterval(() => {
      console.log('ping');
      worker.send('ping')
      missingPing++
      if(missingPing >= 3){
        clearInterval(inter)
        process.kill(worker.process.pid)
      }
    }, 100);
    worker.on('message', msg => {
      console.log('pong');
      if (msg === 'pong')
      missingPing--
    })
  }



  // 自动复活死掉进程
  cluster.on('exit', () => {
    cluster.fork()
  })
} else {
  require('./app')

  process.on('message', msg => {
    if (msg === 'ping') 
      process.send('pong')
  })

  // 监听此事件后，nodejs不会因为错误退出进程，取消默认退出行为
  process.on('uncatException', err => {
    process.exit(1)
  })

  // 模拟发生内存泄露，杀掉进程
  setInterval(() => { 
    console.log('process.memoryUsage().rss: ', process.memoryUsage().rss);
    if (process.memoryUsage().rss > 734003200) { 
      console.log('oom');
      process.exit(1)
    }
  }, 1000 )
}
