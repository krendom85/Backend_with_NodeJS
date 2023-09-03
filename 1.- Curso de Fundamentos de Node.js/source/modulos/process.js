// const p = require('process');

process.on('beforeExit',()=>{
    console.log('el proceso va a terminar')
})

process.on('exit',()=>{
    console.log('Ale, el proceso acabo')
    setTimeout(()=>{
        console.log('Esto se va a ver')
    },0)
})

process.on('uncaughtException',(err,origen) =>{
    console.log('Vaya se nos ha olvidado capturar un error')
    console.log(err)
    setTimeout(()=>{
        console.log('Esto viene desde la excepcion')
    },0)
})

functionQueNoExiste()
// process.on('uncaughtException')
