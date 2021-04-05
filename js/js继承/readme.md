* [访问地址](https://zouyifeng.github.io/practice/js/js%E7%BB%A7%E6%89%BF/index.html?_blank)


| 继承方法 &nbsp;&nbsp;&nbsp;&nbsp; | 实现思路 | 优点和缺点 |
| :----| :---- | :---- |
| 原型链继承| SubType.prototype = new SuperType() | 父类上存在引用类型的实例数据，则多个子类的实例会共享数据 |
| 构造函数继承 | function SubType(val) { SuperType.call(this, val) } | 无法继承父类函数prototype属性上的属性和方法 |
| 组合继承 | 结合上面`原型链继承`和`构造函数继承`实现 | 在SubType.prototype = new SuperType()步骤上，<br/> 会在SubType的prototype上挂载多余的SuperType的实例属性 |
| 寄生组合继承 | 优化组合继承，利用SubType.prototype = Object.create(SuperType.prototype) | 避免子类prototype挂载无用属性 |
| Class继承 | 单元格 | 单元格 |

