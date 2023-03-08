const EventEmitter = require('events');
const costumEmitter = new EventEmitter()

costumEmitter.on('response',(name,id)=>{
    console.log(`Hello this is ${name} with the id of ${id}`);
    
})

costumEmitter.on('response',()=>{
    console.log('bla bla 2');
})

costumEmitter.emit('response','omer',35)