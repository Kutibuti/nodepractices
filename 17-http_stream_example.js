const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./folder/big.txt', { encoding: 'utf8' })
        .on('open', () => {
            fileStream.pipe(res)
        })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
.listen(3000)

// http.createServer(function (req, res) {
//     fs.createReadStream('./folder/big.txt',{encoding:'utf8'})
//     .on('data',(result) =>{
//         res.end(result)
//     })
// })
//     .listen(3000)