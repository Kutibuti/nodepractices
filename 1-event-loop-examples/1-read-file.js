const fs = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
fs.readFile('./folder/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')
