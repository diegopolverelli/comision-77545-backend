const express=require('express');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

let nombres=["Jose", "Carmen", "Mariana"]

app.get("/nombres", (req, res)=>{

    res.send(nombres)
})

app.get("/nombres/:pos", (req, res)=>{

    let {pos}=req.params
    // validaciones
    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo puedo pedir nombres del 1 al ${nombres.length}`})
    }

    res.send({nombre: nombres[pos-1]})
})

app.post("/nombres", (req, res)=>{

    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre!`})
    }

    // validaciones

    nombres.push(nombre)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombres});

})

app.put("/nombres/:pos", (req, res)=>{

    let {pos}=req.params
    // validaciones
    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo puedo pedir nombres del 1 al ${nombres.length}`})
    }

    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre a modificar!`})
    }

    let nombreAnterior=nombres[pos-1]
    nombres[pos-1]=nombre

    res.send({
        // nombreAnterior: nombreAnterior,
        nombreAnterior,
        nuevoNombre: nombres[pos-1], 
        nombres

    })
})

app.delete("/nombres/:pos", (req, res)=>{

    let {pos}=req.params
    // validaciones
    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo puedo pedir nombres del 1 al ${nombres.length}`})
    }

    let nombreBorrado=nombres[pos-1]
    nombres.splice(pos-1, 1)

    res.send({
        nombreBorrado, 
        nombres
    })
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
