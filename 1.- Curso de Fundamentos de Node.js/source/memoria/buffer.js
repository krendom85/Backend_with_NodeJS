// let buffer = Buffer.alloc(4); reserva 4 bytes
// let buffer = Buffer.from([1,2,3]); // Guarda bytes

let buffer = Buffer.from('hola')

console.log(buffer.toString())

// -- 

let abc = Buffer.alloc(26);

for (let i=0; i<26;i++){
    abc[i] = i + 97;
}
console.log(abc.toString());