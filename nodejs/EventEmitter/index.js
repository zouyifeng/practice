const EventEmitter = require('events').EventEmitter


class App extends EventEmitter {
  constructor () {
    super()
    setInterval(() => {
      this.emit('notice', 'notice')
    }, 3000);
  }
}

const app  = new App()

app.addListener('notice', notice => {
  console.log('notice: ', notice);
})