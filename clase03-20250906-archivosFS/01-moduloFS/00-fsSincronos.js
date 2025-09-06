const fs=require("fs")

// CRUD
// Utilizando fs con métodos sincronos:
// 1) crear un archivo, 
// 2) leer el archivo y mostrar contenido en pantall
// 3) agregar al final del archivo un renglon en blanco y luego 
//    el texto "Editorial Planeta"
// 4) eliminar el archivo


let texto1=`La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`

let ruta="./archivos/archivo01.txt"

if(fs.existsSync(ruta)){
    console.log(`el archivo ${ruta} existe!!!`)
}else{
    console.log(`${ruta} no existe!`)
}

// fs.writeFileSync(ruta, texto1, {encoding:"utf-8"})
fs.writeFileSync(ruta, texto1)
let datosLeidos=fs.readFileSync(ruta, "utf-8")
console.log(datosLeidos)
// fs.appendFileSync(ruta, `\n\nEditorial Planeta`, {encoding:"ascii"})
fs.appendFileSync(ruta, `\n\nEditorial Planeta`)
datosLeidos=fs.readFileSync(ruta, "utf-8")
console.log(datosLeidos)

setTimeout(() => {
    fs.unlinkSync(ruta)
}, 2000);


