const suma = (a, b) => {
    return new Promise((res, rej) => {
        if (typeof a != "number" || typeof b != "number") {
            rej(`Solo se admiten argumentos numéricos`)
        }

        res(a + b)
    })
}

const multiplica = (a, b) => {
    return new Promise((res, rej) => {
        if (typeof a != "number" || typeof b != "number") {
            rej(`Solo se admiten argumentos numéricos`)
        }

        res(a * b)
    })
}



// 5 x 6 = 30
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(res3=>{
                        suma(res3, 5)
                            .then(res4=>{
                                console.log(res1)
                                suma(res4, 5)
                                    .then(resFinal=>console.log(`resultado 5 x 6= ${resFinal} (promise hell)`))
                            })
                    })
            })
    })

suma(3, 3)
    .then(res=>{
        return "cualquier cosa"  // string
    })
    .then(res=>{
        return res.toUpperCase()
    })
    .then(resFinal=>{
        throw new Error("paso algo...")
        console.log(resFinal)
    })
    .catch(e=>{
        console.log("Error...!!!")
    })

suma(5, 5)
    .then(res=>{
        return suma(res, 5)
    })
    .then(res=>{
        return suma(res, 5)
    })
    .then(res=>{
        return suma(res, 5)
    })
    .then(res=>{
        return suma(res, 5)
    })
    .then(resFinal=>{
        console.log(`Resultado ${resFinal} (encadenamiento promesas)`)
    })
    .catch(e=>{
        console.log("Error...!!!")
    })

// 5x4 + 3x3 = 29
let auxiliar=0
multiplica(5, 4)
    .then(res1=>{
        auxiliar=res1
        return multiplica(3, 3)
    })
    .then(res2=>{
        // return suma(res1, res2)
        return suma(auxiliar, res2)
    })
    .then(resFinal=>console.log(`Res operacion: ${resFinal}`))