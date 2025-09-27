const express=require('express');
const {engine} =require("express-handlebars")

const {router:viewsRouter} =require("./routes/viewsRouter.js")
const villanosRouter=require("./routes/villanos.router.js")
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("hbs", engine({extname: "hbs"}));
app.set("view engine", "hbs")
app.set("views", "./src/views")


app.use("/api/villanos", villanosRouter)
app.use("/", viewsRouter)

// app.get('/',(req,res)=>{

//     let nombre="Juan"

//     let texto=`<h2>Home Page</h2><hr> 
//     <p>Prueba vistas! Hola ${nombre}</p>
//     `

//     res.setHeader('Content-Type','text/html');
//     res.status(200).send(texto);
// })

app.get("/", (req, res)=>{
    let {nombre}=req.query

    res.render("homepage", {
        nombre
    })
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
