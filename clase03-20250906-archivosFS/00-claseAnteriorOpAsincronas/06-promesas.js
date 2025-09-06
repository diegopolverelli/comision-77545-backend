const suma = (a, b) => {
    return new Promise((res, rej) => {
        if (typeof a != "number" || typeof b != "number") {
            rej(`Solo se admiten argumentos numéricos`)
        }

        res(a + b)
    })
}

console.log(suma(5, 6))
console.log(suma(5, 6) + 100)

suma(5, 6)
    .then(resultado => {
        console.log(`El resultado es ${resultado}`)
    })
    .catch(error => {
        console.log(`Error...!!!`)
    })


suma(5, ["a"])
    .then(resultado => {
        console.log(`El resultado es ${resultado}`)
    })
    .catch(error => {
        console.log(`Error...!!!`)
    })

// let respuesta=fetch("http...")
fetch("https://reqres.in/api/users/2").then(res=>{
    res.json().then(data=>{
        console.log(data)
    })
})