
class Persona{

    #nombre=""
    apellido=""
    static #cantidadPersonasDefinidas=0

    constructor(nombre, email, edad){
        Persona.#cantidadPersonasDefinidas++
        this.#nombre=nombre
        this.email=email
        this.edad=edad
    }

    static verCantidadPersonas(){
        return this.#cantidadPersonasDefinidas
    }

    saludar(){
        return `Hola, me llamo ${this.#nombre}`
    }

    saludo2(){
        let texto=`${this.saludar()} ¿cual es tu nombre?`
        return texto
    }

    cambiaNombre(nuevoNombre){
        // validaciones
        if(typeof nuevoNombre!="string") throw new Error("El nombre debe ser un texto")

        this.#nombre=nuevoNombre

    }


}

let persona01=new Persona("Lorena", "lore@test.com", 29)
let persona02=new Persona("Mateo", "mateo@test.com", 32)
let persona03=new Persona("Mateo 2", "mateo@test.com", 32)
let persona04=new Persona("Mateo 3", "mateo@test.com", 32)
let persona05=new Persona("Mateo 4", "mateo@test.com", 32)

console.log(persona01)
console.log(persona02)

console.log(`El nombre de la persona02 es ${persona02.nombre}`)

console.log(persona02.saludar())


persona01.nombre=false
// persona01.cambiaNombre(false)
persona01.cambiaNombre("Matilde")
console.log(persona01)

// console.log(Persona.cantidadPersonasDefinidas)
console.log(`Cantidad de personas definidas: ${Persona.verCantidadPersonas()}`)