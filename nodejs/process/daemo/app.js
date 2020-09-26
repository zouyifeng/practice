const fs = require('fs')
const http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  // setTimeout(() => {
    // console.log(window.location.href)
    res.end(fs.readFileSync(__dirname + '/index.htm', 'utf-8'))
  // }, 50)
}).listen(3000, () => { 
  console.log('listen 3000')
})
while (true) { }
