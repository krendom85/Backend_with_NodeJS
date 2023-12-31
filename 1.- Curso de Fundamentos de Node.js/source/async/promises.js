function hola(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Hola, '+nombre);
            resolve(nombre);
        },1000);
    });
}

function hablar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            console.log('Bla bla bla bla...')
            resolve(nombre)
        },1000)
    });
}

function adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            console.log('Adios',nombre)
            resolve()
        },1000);
    });
}

function conversacion(nombre,veces,callback)
{
    if(veces >= 0){
        hablar(function(){
            conversacion(nombre,--veces,callback);
        })
    }else{
        adios(nombre,callback)
    }
}

console.log('Iniciando el proceso...')
hola("Carlos")
    .then(hablar)
    .then(adios)
    .then(()=>{
        console.log("Terminado el proceso")
    })
    .catch(error =>{
        console.error("Ha habido un error")
        console.error(error)
    })