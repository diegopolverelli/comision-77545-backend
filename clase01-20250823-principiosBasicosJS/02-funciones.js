
function suma(a, b){
    // mas código
    if(typeof a!="number" || typeof b!="number"){
        // console.log(`Solo se admiten datos numericos`)

        return `Solo se admiten datos numericos`
    }

    let resultado=a+b
    
    // console.log(a+b)
    return resultado
}


let resultado=suma(5,4)
console.log(resultado)

resultado=suma(5,5)
console.log(resultado)

resultado=suma(-5,104)
console.log(resultado)

// suma="la accion de sumar 2 números"

resultado=suma(-5,false)
console.log(resultado)
resultado=suma(-5,"Carlos")
console.log(resultado)

function prueba(){
    console.log(`prueba...`)

}

console.log(prueba())

const suma1=function(a, b){
    return a+b
}

// suma1="juan"

console.log(suma1(8,8))

const operar=function(a, b, fnCalculo){
    return fnCalculo(a, b)
}

resultado=operar(3, 7, suma)
console.log(resultado)
resultado=operar(3, 7, function(a, b){
    return a*b
})
console.log(resultado)

resultado=operar(3, 7, function(a, b){
    if(typeof a!="number" || typeof b!="number"){
        // console.log(`Solo se admiten datos numericos`)

        return `Solo se admiten datos numericos`
    }
    if(b==0){
        return `No se puede dividir por cero...!!!`
    }

    return a/b
})
console.log(resultado)

resultado=operar(3, 0, function(a, b){
    if(typeof a!="number" || typeof b!="number"){
        // console.log(`Solo se admiten datos numericos`)

        return `Solo se admiten datos numericos`
    }
    if(b==0){
        return `No se puede dividir por cero...!!!`
    }

    return a/b
})
console.log(resultado)

resultado=operar(3, 7, function(a, b){
    return a-b
})
console.log(resultado)

// const sumaFlecha=(a, b)=>{
//     return a+b
// }
const sumaFlecha=(a, b)=>a+b

console.log(sumaFlecha(8,7))

const cuadrado=a=>a*a
console.log(cuadrado(9))

const saludo=()=>"hola...!!!"
console.log(saludo())


