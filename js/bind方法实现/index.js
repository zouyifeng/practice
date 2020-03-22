Function.prototype.bind = function(that, ...argv) {
  // argv bind函数执行传入的参数
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not callable`);
  }

  // 保存原函数
  let self = this;

  // 获取bind后函数传入的参数
  return function(...argu) {
    // argu bind函数执行后返回的函数传入的参数
    return self.apply(that, [...argv, ...argu]);
  };
};

let obj = { name: 'seve' };

let func1 = function(a, b, c) {
  console.log(this.name);
  console.log([a, b, c]);
}.bind(obj, 1, 2);

func1(3); // seve
// [ 1, 2, 3 ]




