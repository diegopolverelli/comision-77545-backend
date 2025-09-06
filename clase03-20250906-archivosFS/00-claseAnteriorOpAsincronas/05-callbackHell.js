const operar=(a, b, cb)=>{  // a number, b number, cb(error, ...)
    if(typeof a!="number" || typeof b!="number"){
        // throw new Error(`Solo se admiten argumentos numéricos`) 
        return cb(new Error(`Solo se admiten argumentos numéricos`))
    }
    return cb(null ,a, b)
}


// (5x4 + 3X2)/10 + 100 = 102,6
let resultado=operar(100, 0, (e, a, b)=>{
    return operar(10, 0, (e, a, b)=>{
        return operar(3, 2, (e, a, b)=>{
            return operar(5, 4, (e, a, b)=>{
                return a*b
            }) + a*b
        })/a
    }) + a
})

console.log(resultado)