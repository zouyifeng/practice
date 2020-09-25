nodejs利用chrome开发者工具调试

node --inspect-brk index.js

优化原则：

空间换时间，将一些计算结果缓存起来。耗时操作提出中间件外处理，提前计算。

nodejs底层要返回http body，会将字符串转成buffer，转换成c++可识别的数据类型

压测执行：ab -c50 -t15 http://localhost:4000/

![未经过优化，在中间件中读取文件](https://raw.githubusercontent.com/zouyifeng/practice/master/nodejs/optimization/docs/1.png)
![优化1：将文件内容读取在启动前执行，不在中间件中执行](https://raw.githubusercontent.com/zouyifeng/practice/master/nodejs/optimization/docs/2.png)
![优化2：将body内容从字符串改成buffer，减去body为字符串时需计算长度的耗时操作](https://raw.githubusercontent.com/zouyifeng/practice/master/nodejs/optimization/docs/3.png)