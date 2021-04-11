### trim方法实现

```js
String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, '')
}
```

[参考](https://www.cnblogs.com/rubylouvre/archive/2009/09/18/1568794.html)