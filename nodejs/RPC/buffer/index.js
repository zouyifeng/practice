const buffer1 = Buffer.from('geek')
const buffer2 = Buffer.from([1, 2, 3, 4])
console.log('buffer1: ', buffer1);
console.log('buffer1 length: ', buffer1.toString());
console.log(buffer2)
buffer2.writeInt8('a', 1)
// buffer2.writeInt16LE(512, 2)
console.log(buffer2.toJSON());

const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8')) 
console.log(schema)

const buffer = schema.Column.encode({
  id: 1,
  name: 'node.js',
  price: 80.4
})

console.log(schema.Column.decode(buffer));