console.log('Algo')
console.info('Algo')
console.error('Algo')
console.warn('Algo')

var tabla = [
    {
        a:1,
        b: 'Z'
    },
    {
        a:2,
        b: 'Otra'
    }
]

console.table(tabla)


console.group('conver')
console.log('Conversacion');
console.log('Hola');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('Adios');
console.groupEnd('conver')

console.log('Otra cosa de otra funcion');

function funcion1(){
    console.group('funcion 1')
    console.log('Esto es una funcion 1')
    console.log('Esto es una funcion 1')
    console.log('Esto es una funcion 1')

    funcion2()
    console.log('Esto es una funcion 1')
    console.groupEnd('funcion 1')

}

function funcion2(){
    console.group('funcion 2')
    console.log('Esto es una funcion 2')
    console.groupEnd('funcion 2')

}

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')

console.countReset('veces')
console.count('veces')




funcion1()
