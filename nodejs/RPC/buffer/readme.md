buffer 创建

buffer.from()
buffer.alloc()

buffer 写入

writeInt8
writeInt16BE
writeInt16LE

BE、LE区别，就是大端序和小端序，就是高位排序和低位排序区别

BE: 512 -> 02 00   高位在前
LE: 512 -> 00 02   低位在前

buffer中用16进制记载数据 

00 00 00 两位两位分布，每一位数都是16进制数字，int8只占用一位，所以writeInt8无需区分高低位

nodejs 二进制结构化数据的解决方案：

[protocol buffer](https://github.com/mafintosh/protocol-buffers)