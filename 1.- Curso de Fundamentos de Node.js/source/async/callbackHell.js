function hola(nombre,miCallback) {
    setTimeout(function(){
        console.log('Hola, '+nombre);
        miCallback("Christian");
    },1000);
}

function hablar(callbackHablar){
    setTimeout(function() {
        console.log('Bla bla bla bla...')
        callbackHablar();
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios',nombre)
        otroCallback();
    },1000);
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

hola("Carlos",function(nombre){
    conversacion(nombre,3,function(){
        console.log("Proceso Terminado")
    })
})

// hola('Carlos',function(nombre){
//     hablar(
//         adios(nombre,function(){
//            console.log('Terminando proceso...') 
//        })
//     )
// });

