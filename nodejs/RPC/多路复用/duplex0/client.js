const net = require('net');

// 创建socket
const socket = new net.Socket({});

// 连接服务器
socket.connect({
    host: '127.0.0.1',
    port: 4000
});


const lessonids = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
]

socket.on('data', (buffer) => {
    // console.log(buffer.toString())
    const seqBuffer = buffer.slice(0, 2)
    const titleBuffer = buffer.slice(2)

    console.log(seqBuffer.readInt16BE(), titleBuffer.toString());
})

socket.on('error', function(err) {
  console.log(err)
})

// 请求生成序号，响应也返回该序号，全双工通信中可判断算是哪次请求的响应
var seq = 0
// 把编码请求包的逻辑封装为一个函数
function encode(index) {
    buffer = Buffer.alloc(6);
    buffer.writeInt16BE(seq)
    buffer.writeInt32BE(
        lessonids[index], 2
    );
    console.log(seq, lessonids[index]);
    seq++
    return buffer;
}

// 定时发送请求，模拟全双工通信
// setInterval(() => {
//     id = Math.floor(Math.random() * lessonids.length);
//     socket.write(encode(id));
// }, 50);

// 同时发送多个请求，TCP优化机制处理成粘包
for(var i = 0; i < 100; i++) {
    id = Math.floor(Math.random() * lessonids.length);
    socket.write(encode(id));
}