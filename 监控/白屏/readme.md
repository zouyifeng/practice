### 页面白屏情况


#### 页面声明周期

- `DOMContentLoaded` —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 <img> 和样式表之类的外部资源可能尚未加载完成

- `load` —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等

- `beforeunload/unload` —— 当用户正在离开页面时

-  `readyState`，document.readyState有三个值
  1. loading —— 文档正在被加载。
  2. interactive —— 文档被全部读取。
  3. complete —— 文档被全部读取，并且所有资源（例如图片等）都已加载完成。


`readystatechange` 事件是跟踪文档加载状态的另一种机制


在 DOMContentLoaded 之前，document.readyState 会立即变成 interactive。它们俩的意义实际上是相同的。

complete 状态的意义与 window.onload 相同


`DOMContentLoaded` 必须等待脚本执行结束才发生


外部样式表不会影响 DOM，因此`DOMContentLoaded`不会等待它们。如果在样式后面有一个脚本，那么该脚本必须等待样式表加载完成


#### performance.timing
- fetchStart：发起获取当前文档的时间点，我的理解是浏览器收到发起页面请求的时间点；
- domainLookupStart：返回浏览器开始DNS查询的时间，如果此请求没有DNS查询过程，如长连接、资源cache、甚至- 是本地资源等，那么就返回fetchStart的值；
- domainLookupEnd：返回浏览器结束DNS查询的时间，如果没有DNS查询过程，同上；
- connectStart：浏览器向服务器请求文档，开始建立连接的时间，如果此连接是一个长连接，或者无需与服务器连接（命中缓存），则返回domainLookupEnd的值；
- connectEnd：浏览器向服务器请求文档，建立连接成功的时间；
- requestStart：开始请求文档的时间（注意没有requestEnd）;
- responseStart：浏览器开始接收第一个字节数据的时间，数据可能来自于服务器、缓存、或本地资源；
- unloadEventStart：卸载上一个文档开始的时间；
- unloadEventEnd：卸载上一个文档结束的时间；
- domLoading：浏览器把document.readyState设置为“loading”的时间点，开始构建dom树的时间点；
- responseEnd：浏览器接收最后一个字节数据的时间，或连接被关闭的时间；
- domInteractive：浏览器把document.readyState设置为“interactive”的时间点，DOM树创建结束；
- domContentLoadedEventStart：文档发生DOMContentLoaded事件的时间；
- domContentLoadedEventEnd：文档的DOMContentLoaded事件结束的时间；
- domComplete：浏览器把document.readyState设置为“complete”的时间点；
- loadEventStart：文档触发load事件的时间；
- loadEventEnd：文档出发load事件结束后的时间

![timing](./timing.png)

- 准备新页面耗时：fetchStart - navigationStart
- 重定向时间：redirectEnd - redirectStart
- App Cache时间：domainLookupStart - fetchStart
- DNS解析时间：domainLookupEnd -domainLookupStart
- TCP连接时间：connectEnd - connectStart
- request时间：responseEnd - requestStart这个计算是代表请求响应加起来的时间
- 请求完毕到DOM树加载：domInteractive -responseEnd
- 构建与解析DOM树，加载资源时间：domCompleter -domInteractive
- load时间：loadEventEnd - loadEventStart
- 整个页面加载时间：loadEventEnd -navigationStart
- 白屏时间：responseStart-navigationStart

#### performance.getEntries()

API请求返回的是一个数组，这个数组包括整个页面所有的资源加载情况

- entryType：类型为resource
- name：资源的url
- initiatorType：资源是link
- 资源时间：duration的值，是responseEnd - startTime得到的


####  performance.memory

- jsHeapSizeLimit：内存大小限制
- totalJSHeapSize：可使用的内容
- userdJSHeapSize：已使用的内容