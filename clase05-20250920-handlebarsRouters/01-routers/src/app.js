const express=require('express');
const { logger } = require('./middlewares/logger.js');
const { formatearDatos } = require('./middlewares/format.js');
const { auth } = require('./middlewares/auth.js');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
