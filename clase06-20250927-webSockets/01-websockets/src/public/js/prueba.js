const socket=io()
const nombre=prompt("Ingrese su nombre")
document.title=nombre
const divTemperatura=document.getElementById("temperatura")
const divAlertas=document.getElementById("alertas")

socket.on("temperatura", temperatura=>{
    divTemperatura.textContent=`La temperatura actual del equipo es de ${temperatura}°`
})

// socket.emit("")

socket.on("oferta", oferta=>{
    alert(oferta)
})

socket.on("nuevoHeroe", heroe=>{
    divAlertas.textContent=`Se ha generado un nuevo heroes: ${heroe.name}`
})

socket.on("saludo", ()=>{
    if(nombre){
        socket.emit("nombre", nombre)
    }
})

socket.on("nuevoUsuario", nombre=>{
    alert(`${nombre} se ha unido al server!`)
})