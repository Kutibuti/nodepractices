const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// Commended codes goes advanced to beginner downwards
const start = async () => {
    try {
        const first = await readFile('./folder/first.txt', 'utf8')
        const second = await readFile('./folder/second.txt', 'utf8')
        await writeFile('./folder/result-mind-grenade.txt',
        `Hello this is the result:::: ${first}, ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start()

// const start = async () => {
//     try {
//         const first = await readFilePromise('./folder/first.txt','utf8')
//         const second = await readFilePromise('./folder/second.txt','utf8')
//         await writeFilePromise('./folder/result-mind-grenade.txt',`Hello this is the result:::: ${first}, ${second}`)
//         console.log(first,second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//                 return
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getPath('./folder/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

