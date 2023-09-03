let suma = 0

console.time('bucle')
for (let i = 0; i < 10000; i++) {
    suma += 1;
}
console.timeEnd('bucle')

console.time('bucle')
for (let j = 0; j < 100000000; j++) {
    suma += 1;
}
console.timeEnd('bucle')



console.time('Asincrono')
console.log('Empieza el proceso asincrono')
asincrona()
    .then(()=>{
        console.timeEnd('Asincrono')
    })



function asincrona(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Termina el proceso asncrono') 
            resolve();   
        })
    })
}