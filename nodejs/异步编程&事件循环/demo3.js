setTimeout(() => {
  setTimeout(() => {
      console.log('setTimeout');
  }, 0);
  setImmediate(() => {
      console.log('setImmediate');
  });
}, 0);  

// var fs = require('fs')

// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout');
//     }, 0);
//     setImmediate(() => {
//         console.log('immediate');
//     });
// });
