const os = require('os')

const procesador = os.arch()
const sistema = os.platform()
const cpu = os.cpus().length
const memoria = os.totalmem()

console.log('procesador : ' + procesador)
console.log('sistema    : ' + sistema)
console.log('cpu        : ' + cpu)
console.log('memoria ram: ' + memoria)
/* implementar con promesas un función que retorne la memoria
en kb,mb y gb
1024 bytes = 1kb
1024 kb = 1mb
1024 mb = 1gb
*/

function calcularMemoria(capacidad,tipo){
    return new Promise((res,rej)=>{
        let memoriaConvertida = capacidad / 1024
        console.log('MEMORIA EN ' + tipo + ' : ' + memoriaConvertida.toFixed(2))
        res(memoriaConvertida)
        rej('error...')
    })
}

calcularMemoria(memoria,'KB')
    .then((kb)=>calcularMemoria(kb,'MB'))
    .then((mb)=>calcularMemoria(mb,'GB'))