const fs = require('fs');
let counts = 0;

function wait (mstime) {
  let date = Date.now();
  while (Date.now() - date < mstime) {
    // do nothing
  }
}

function nextTick () {
  process.nextTick(() => {
    wait(20);
    console.log('nextTick ', counts++);
    nextTick();
  });
}

const lastTime = Date.now();

setTimeout(() => {
  console.log('timers', Date.now() - lastTime + 'ms');
}, 0);

nextTick();
