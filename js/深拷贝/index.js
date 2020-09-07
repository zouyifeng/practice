function deepClone (obj) {
  if (typeof obj !== 'object') return obj
  if (obj === null) return null
  if (obj instanceof RegExp) return RegExp(obj)
  if (obj instanceof Date) return new Date(obj)

  var newObj = new obj.__proto__.constructor;
  for (var key in obj) {
    console.log(key)
    newObj[key] = deepClone(obj[key])
  }
  return newObj
}



var a = [1,2,3]
var b  = deepClone(a)
console.log(a === b)


// number string object null undefined  boolean

// object -> function date regexp date