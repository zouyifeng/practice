const user = {
  name: '<scirpt>'
}

const vm = require('vm')

const templateMap = {
  templateA: '`<h2>${_(include("templateB"))}</h2>`',
  templateB: '`<p>hhh</p>`'
}

var context = {
  include: function(name) {
    return templateMap[name]()
  },
  _: function (markup) {
    if (!markup) return ''
    return String(markup)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  } 
}

Object.keys(templateMap).forEach(key => {
  const temp = templateMap[key]

  templateMap[key] = vm.runInNewContext(
    `
      (function(){
        return ${temp}
      })
    `, context
  )
})

console.log(templateMap['templateA']());