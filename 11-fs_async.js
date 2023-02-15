const fs = require('fs');
console.log("hello");
fs.readFile('./folder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result
    fs.readFile('./folder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        fs.writeFile('./folder/result_sync.txt',`Our result is: ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("Done with this task");
        })
    })
})
console.log("Starting next task");