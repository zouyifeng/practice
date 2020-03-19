// 1、原型链继承
function SuperType () {
  this.property = true;
  this.colors = ['red', 'black'];
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType () {
  this.subproperty = false;
}

// 关键操作：子类的prototype属性是父类的实例
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
}

var instance = new SubType();
console.log(1, instance.getSubValue());
instance.colors.push('white');

var instance1 = new SubType();
console.log(1, instance.colors);
// 缺点：多个实例可以对原型链上的引用类型的对象，进行操作篡改
// 无法实现多继承


// 2、借用构造函数继承
function SuperType() {
  this.colors=['red', 'green']
}

// 关键操作：创建子类实例的时候，调用SuperType构造函数
// 将SuperType上的属性，赋值到每一个SubType的实例上
function SubType() {
  SuperType.call(this)
}

var instance1 = new SubType()
instance1.colors.push('black')
console.log(2, instance1.colors)


var instance2 = new SubType()
console.log(2, instance2.colors)
// 缺点：只能继承父类的实例属性和方法，不能继承原型的属性/方法
// 无法实现复用，每个子类都有父类实例函数的副本，影响性能

// 3、组合继承（结合原型链继承和构造函数继承）
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue']
}

SuperType.prototype.sayName = function() {
  console.log(3, this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(3, this.age)
}

var instance1 = new SubType('nick', 29)
instance1.colors.push('black')
console.log(3, instance1.colors)
instance1.sayName()
instance1.sayAge()

var instance2 = new SubType('Greg', 27)
console.log(3, instance2.colors)
instance2.sayName()
instance2.sayAge()

// 缺点：
// 第一次调用SuperType()：给SubType.prototype写入两个属性name，color。
// 第二次调用SuperType()：给instance1写入两个属性name，color。
// 实例对象instance1上的两个属性就屏蔽了其原型对象SubType.prototype的两个同名属性。
// 所以，组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。



// 4、原型式继承
// 利用空对象（函数）作为中介，将摸个某象直接赋值给空对象（函数）构造函数的原型
function object(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}

var person = {
  name: 'nicholas',
  friends: ['ben']
}

var person2 = object(person)
person2.name = 'linada'
person2.friends.push('rob')

var person3 = object(person);
person3.name = "Greg";
person3.friends.push("mike");
console.log(4, person.friends);
// 原型链继承多个实例的引用类型属性指向相同，存在篡改可能
// Object.create 方法可替代


// 5、寄生式继承
// 核心：在原型式继承的基础上，增强对象，返回构造函数
// 函数的主要作用是为构造函数新增属性和方法，以增强函数
function createAnother(original) {
  var clone = object(original)
  clone.sayHi = function() {
    console.log('hi')
  }
  return clone;
}

var person = {
  name: 'BEN',
  friends: ['mike']
}
var anotherPerson = createAnother(person)
anotherPerson.sayHi()
// 缺点：原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。无法传递参数


// 寄生组合式继承
// 结合借用构造函数传递参数和寄生模式实现继承
function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype)
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType (name) {
  this.name = name;
  this.colors = ['red']
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType (name, type) {
  SuperType.call(this, name)
  this.age = age
}

inheritPrototype(subType, superType)

subType.prototype.sayAge = function () {
  console.log(this.age)
}

var instance1 = new SubType('xxx', 23)
var instance2 = new SubType('aaa', 24)

instance1.colors.push('2')
instance2.colors.push('3')

// 优点：只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。
// 于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf()

// ES6类继承extends
class Rectangle {
  // constructor
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
  
  // Getter
  get area() {
      return this.calcArea()
  }
  
  // Method
  calcArea() {
      return this.height * this.width;
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area);
// 输出 200

// 继承
class Square extends Rectangle {

constructor(length) {
  super(length, length);
  
  // 如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
  this.name = 'Square';
}

get area() {
  return this.height * this.width;
}
}

const square = new Square(10);
console.log(square.area);
// 输出 100

// extends 核心代码

function _inherits(subType, superType) {
  
  // 创建对象，创建父类原型的一个副本
  // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  // 指定对象，将新创建的对象赋值给子类的原型
  subType.prototype = Object.create(superType && superType.prototype, {
      constructor: {
          value: subType,
          enumerable: false,
          writable: true,
          configurable: true
      }
  });
  
  if (superType) {
      Object.setPrototypeOf 
          ? Object.setPrototypeOf(subType, superType) 
          : subType.__proto__ = superType;
  }
}
