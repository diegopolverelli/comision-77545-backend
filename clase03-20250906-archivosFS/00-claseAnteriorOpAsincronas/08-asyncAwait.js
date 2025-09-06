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


// 5x4 + 3x3 = 29
const operacion=async()=>{
    let res1=await multiplica(5, 4)
    let res2=await multiplica(3, 3)
    let resFinal=await suma(res1, res2)

    // console.log(`Resultado ${resFinal}`)
    return `Resultado ${resFinal}`
}

// operacion()
// console.log(operacion())
// operacion()
//     .then(res=>console.log(res))
//     .catch(e=>console.log(e.message))

const app=async()=>{
    console.log(await operacion())
}

app()


const consultaAPI=async(url="")=>{
    let respuesta=await fetch(url)
    let data=await respuesta.json()
    return data
}

const controladorRutaUsuarios=async()=>{
    let datos=await consultaAPI("https://reqres.in/api/users/2")
    console.log(datos)
}

controladorRutaUsuarios()
// consultaAPI().then()