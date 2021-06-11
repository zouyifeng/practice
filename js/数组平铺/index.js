const flat = arr => 
  arr.reduce((acc, cur) => 
    acc.concat(Array.isArray(cur) ? flat(cur) : cur)
    , [])
  
    