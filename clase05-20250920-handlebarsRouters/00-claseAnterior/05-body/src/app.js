const express=require('express');
const { UsersManager } = require('./dao/UsersManager.js');
const PORT=3000;

UsersManager.path="./src/data/users.json"

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/usuarios", async(req, res)=>{
    let {nombre, email, password}=req.body
    if(!nombre || !email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre email password son requerdos`})
    }

    // validaciones...
    try {
        let usuarios=await UsersManager.getUsers()
        let existe=usuarios.find(u=>u.email==email)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existen usuarios con email: ${email} - ${existe.nombre}`})
        }

        let nuevoUsuario=await UsersManager.addUser(nombre, email, password)
        res.send({
            message:`Usuario generado!`, 
            nuevoUsuario
        })
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})        
    }
})

app.get('/', (req,res)=>{


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/usuarios/:id/listar/:pais", (req, res)=>{
    console.log(req.params.pais)
    console.log(req.params.id)

    res.send("prueba")
})

app.get("/usuarios/:id", async(req, res)=>{
    let {id}=req.params

    try {
        let usuarios=await UsersManager.getUsers()
        let usuario=usuarios.find(u=>u.id==+id)
        if(!usuario){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen usuarios con id ${id}`})
        }
        res.send(usuario)
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
    }

})



app.get("/usuarios", async(req, res)=>{

    let {cantidad}=req.query
    // let a=2+2

    try {
        // fs.read
        let usuarios=await UsersManager.getUsers()
        if(cantidad){
            usuarios=usuarios.slice(0, cantidad)
        }
        res.send(usuarios)
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
    }

})

app.get('/datos1', (req,res)=>{  // funcion handler o controller de la ruta /datos1

    console.log(req.query)
    // let nombre=req.query.nombre

    let {nombre, edad, password}=req.query

    if(!nombre || !edad || !password){

        res.status(400).send(`Nombre | edad | password son requerido`)
        return 
    }
    
    res.setHeader('Content-Type','text/plain');
    res.status(200).send({message:"datos 1"});
})

app.get('/datos2', function controllerRutaDatos2(req, res){

    res.send("datos2")
})

function controllerRutaDatos3(req, res){

    res.send("datos3")
}

app.get('/datos3', controllerRutaDatos3)


const server=app.listen(PORT,()=>{

    // codigo...

    console.log(`Server escuchando en puerto ${PORT}`);
});
