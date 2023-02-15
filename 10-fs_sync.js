const fs = require('fs');
console.log("start");
const first = fs.readFileSync('./folder/first.txt', 'utf8')
const second = fs.readFileSync('./folder/second.txt', 'utf8')

//console.log(`${first} ${second}`);

fs.writeFileSync('./folder/result.txt',
    `Here is the result : ${first}, ${second}`,
    //To append to the current value(not to override it ) use this
    { flag: 'a' }
)

console.log("Done with the task");
console.log("Starting with the next one");