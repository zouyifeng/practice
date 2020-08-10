console.log('this is module');

exports.geekbang = { 'hello': 'haha' }

exports.tencent = function () {
    console.log('good')
}

module.exports = function () {
    console.log('hello geekbang');
}

// 1
setTimeout(() => {
  console.log('1 ', exports);
}, 1000);