// 编码
const payload = {
  service: 'com.alipay.nodejs.HelloService:1.0',
  methodName: 'plus',
  args: [ 1, 2 ],
};
const body = Buffer.from(JSON.stringify(payload));

const header = Buffer.alloc(10);
header[0] = 0;
header.writeInt32BE(1000, 1);
header[5] = 1; // codec => 1 代表是 JSON 序列化
header.writeInt32BE(body.length, 6);

const packet = Buffer.concat([ header, body ], 10 + body.length);


// 解码
const type = packet[0]; // => 0 (request)
console.log(type)
const requestId = packet.readInt32BE(1); // => 1000
console.log(requestId)
const codec = packet[5];
const bodyLength = packet.readInt32BE(6);
console.log(bodyLength)
const bodyl = packet.slice(10, 10 + bodyLength);
const payloadl = JSON.parse(bodyl);