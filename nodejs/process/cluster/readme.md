cluster fork 将http服务分发的几个子进程处理。利用多核能力

单进程
```
Server Software:        
Server Hostname:        127.0.0.1
Server Port:            3000

Document Path:          /
Document Length:        264785 bytes

Concurrency Level:      50
Time taken for tests:   1.197 seconds
Complete requests:      400
Failed requests:        0
Total transferred:      105954000 bytes
HTML transferred:       105914000 bytes
Requests per second:    334.06 [#/sec] (mean)
Time per request:       149.675 [ms] (mean)
Time per request:       2.993 [ms] (mean, across all concurrent requests)
Transfer rate:          86412.89 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0       2
Processing:    19  145  30.6    147     235
Waiting:        7   84  28.5     85     155
Total:         20  145  30.5    147     235

Percentage of the requests served within a certain time (ms)
  50%    147
  66%    151
  75%    158
  80%    159
  90%    177
  95%    203
  98%    220
  99%    227
 100%    235 (longest request)
```


多核
```
Server Software:        
Server Hostname:        127.0.0.1
Server Port:            3000

Document Path:          /
Document Length:        264785 bytes

Concurrency Level:      50
Time taken for tests:   0.793 seconds
Complete requests:      400
Failed requests:        0
Total transferred:      105954000 bytes
HTML transferred:       105914000 bytes
Requests per second:    504.57 [#/sec] (mean)
Time per request:       99.095 [ms] (mean)
Time per request:       1.982 [ms] (mean, across all concurrent requests)
Transfer rate:          130519.91 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.7      0       5
Processing:     8   91  28.6     88     173
Waiting:        7   90  28.5     86     170
Total:         10   91  28.2     88     173

Percentage of the requests served within a certain time (ms)
  50%     88
  66%     96
  75%    101
  80%    105
  90%    133
  95%    150
  98%    155
  99%    159
 100%    173 (longest request)
```