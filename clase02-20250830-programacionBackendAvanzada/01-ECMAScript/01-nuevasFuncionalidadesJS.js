// includes
let nombres=["Juan", "Mariana", "Carlos", "Sabrina", "Veronica"]

console.log(nombres.includes("Marcelo"))
console.log(nombres.includes("Carlos"))
console.log(`El usuario Marcelo ${nombres.includes("Marcelo")?"existe":"no existe"}`)
console.log(`El usuario Carlos ${nombres.includes("Carlos")?"existe":"no existe"}`)


// operador potencia
let numero=9
let resultado=Math.pow(numero, 2)
console.log(resultado)
resultado=9**2
console.log(resultado)

let lado=3
console.log(lado**3)

// métodos Object
let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

let propiedades=Object.keys(usuarios[1])
console.log(propiedades)
let valores=Object.values(usuarios[1])
console.log(valores)
let datos=Object.entries(usuarios[1])
console.log(datos)



// operador spread / operador rest
let usuarioRequest={nombre: "Diana", apellido: "Rojas", email: "drojas@test.com", edad:29, legajo: 9}
let idAsignado=100
let nuevoUsuario={
    idAsignado, 
    // nombre: usuarioRequest.nombre, 
    // apellido: usuarioRequest.apellido, 
    ...usuarioRequest,
    // nombre: "Juan", 
    // nombre: "Alberto", 
    // nombre: "Lucia"
}
console.log(nuevoUsuario)

let modificaciones={email:"drojas2025@hotmail.com", edad:30}
// buscar el usuario con id 100
let usuarioModificado={
    ...nuevoUsuario, // email
    ...modificaciones,  // email nuevo
    idAsignado
}

console.log(usuarioModificado)



let numeros1=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros1, ...numeros2]
console.log(todosLosNumeros)


// Rest ...
// const suma=(a, b, c)=>{

//     return a+b+c
// }

// const suma=(a, b, ...otros)=>{
//     console.log(a, b, otros)
// }

const suma=(...sumandos)=>{   // ... son aquí el op. rest
    let resultado=0
    let error=false
    sumandos.forEach(numero=>{
        if(typeof numero !="number"){
            error=true
        }
        resultado+=numero
    })
    return error?"Solo se admiten datos numericos":resultado
}

console.log(suma(2, 2,))
console.log(suma(2, 2, 3))
console.log(suma(2, 2, 3, 4, 5, 6, 7, 8, 9, 100))
console.log(suma(2, 2, false, 4, 5, 6, 7, ["juan"], 9, 100))
console.log(suma())

console.log(suma(1,2,3,4))  // los ... son aqui el operador ??? SPREAD
console.log(suma(...numeros1))  // los ... son aqui el operador ??? SPREAD


// operador nulish ??




// array.flat()
let arrayAnidado=[1,2,3,[4,5,6],7,8,[9],10,11,12]
console.log(arrayAnidado)
console.log(arrayAnidado.flat())


arrayAnidado=[1,2,3,[4,5,6],7,8,[9,[10,11,12],13,14,[15,[16,17,18]]],19,20]






