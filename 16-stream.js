const fs = require('fs')

const stream = fs.createReadStream('./folder/big.txt', { highWaterMark: 90000, encoding: 'utf8' })
stream.on('data', (result) => {
    console.log(result);
})

stream.on('error',(result) => console.log(result))

// default 64Kb
// last buffer - remainder
// highWaterMark - controlling chunk size
// const stream = createReadStream('./folder/big.txt', {highWaterMark:90000} )
// const stream = createReadStream('./folder/big.txt', {encoding: 'utf8'} )
