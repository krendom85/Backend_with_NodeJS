function otraFucnion(){
    return serompe();
}

function serompe(){
    return 3+ z;
}
function seRompeAsincrona(cb){
    setTimeout(function(){
        try{
            return 3 + z
        }catch(err){
            console.error('Error en mi funcion asincrona')
            cb(err)
        }
    })
}

try{
    // otraFucnion()
    seRompeAsincrona(console.log);
}catch(err){
    console.error('Vaya,algo se ha roto')
    console.log(err.message)
    console.log('Pero no pasa nada ,lo hemos capturado')
}