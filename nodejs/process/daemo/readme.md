### 守护进程：
1. 判断进程占用内存，过高杀掉进程重启
2. 主进程向子进程发送心跳包，超过一定次数无答复，则杀掉进程重启
3. 监听process的uncatException事件，nodejs发生错误不会杀掉进程，由代码处理
