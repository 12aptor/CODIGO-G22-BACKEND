function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Hola ' + nombre)
            resolve(nombre)
            reject('hay un error...')
        },1000)
    })
}

function hablar(nombre){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            console.log("como estas " + nombre)
            res(nombre)
            rej('no te entiendo ...')
        },1000)
    })
}

function adios(nombre){
    setTimeout(function(){
        console.log("adios " + nombre)
    },1000)
}

let nombre = 'César'
hola(nombre)
    .then(hablar)
    .then(adios)
