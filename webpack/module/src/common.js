// lib.js
var counter = 3;
function incCounter() {
  console.log('counter: ', counter);
  counter++;
  debugger
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};