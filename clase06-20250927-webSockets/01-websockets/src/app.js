const express=require("express")
const {Server} =require("socket.io")
const heroesRouter=require("./routes/heroesRouter.js")

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

// app.use('/api/heroes', heroesRouter)
app.use(
    '/api/heroes', 
    (req, res, next)=>{
        req.socket=serverSocket

        next()
    },
    heroesRouter
)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/oferta", (req, res)=>{

    let {texto}=req.query
    if(!texto){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`texto de la oferta es requerido`})
    }

    serverSocket.emit("oferta", texto)

    res.send("Oferta recibida y enviada")
})

const serverHTTP=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const serverSocket=new Server(serverHTTP)

serverSocket.on("connection", socket=>{
    console.log(`Se ha conectado un cliente con id ${socket.id}`)
    socket.emit("saludo", `Bienvenido!, identifiquese`)

    socket.on("nombre", nombre=>{
        console.log(`El cliente con id ${socket.id} se ha identificado como ${nombre}`)
        // socket.broadcast.emit("nuevoUsuario", nombre, 4, false, [1, 2, 3])
        socket.broadcast.emit("nuevoUsuario", nombre)
    })
})

setInterval(() => {
    let temperatura=Math.floor(Math.random()*(7)+25)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    serverSocket.emit("temperatura", temperatura)
}, 1000);