const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    fs.createReadStream('./folder/big.txt',{encoding:'utf8'})
    .on('data',(result) =>{
        res.end(result)
    })
})
.listen(3000)