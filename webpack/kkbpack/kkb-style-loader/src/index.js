#!  /usr/bin/env  node
console.log('kkb-style-loader')
module.exports = (code) => {
  let style = `
    let style = document.createElement('style')
    style.innerHTML = "${code.split('\n').join('')}"
    document.head.appendChild(style)
  `
  return style
}