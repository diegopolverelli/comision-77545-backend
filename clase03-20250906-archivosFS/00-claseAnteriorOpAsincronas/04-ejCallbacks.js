const operar=(a, b, cb)=>{  // a number, b number, cb(error, ...)
    if(typeof a!="number" || typeof b!="number"){
        // throw new Error(`Solo se admiten argumentos numéricos`) 
        return cb(new Error(`Solo se admiten argumentos numéricos`))
    }
    return cb(null ,a, b)
}

console.log(operar(3,3, (e, num1, num2)=>num1+num2))
console.log(operar(3,3, (e, num1, num2)=>num1/num2))
console.log(operar(3,3, (e, num1, num2)=>num1*num2))
console.log(operar(3,3, (e, num1, num2)=>num1-num2))
console.log(operar(3,false, (e, num1, num2)=>{
    if(e){
        // console.log(`Ha ocurrido algo... ${e.message}`)
        return `Ha ocurrido algo... ${e.message}`
    }
    return num1+num2
}))
console.log(operar(3,3, (e, num1, num2)=>num1-num2))