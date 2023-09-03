const fs = require('fs');
const stream = require('stream')
const util = require('util')

let data = '';

let readableStream = fs.createReadStream(__dirname + "/input.txt")

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk){
    data += chunk;
})

readableStream.on('end',()=>{
    console.log(data);
})

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const Transfrom = stream.Transform;

function Mayus(){
    Transfrom.call(this)
}

util.inherits(Mayus,Transfrom);

Mayus.prototype._transform= function(chunk,codif,cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout)