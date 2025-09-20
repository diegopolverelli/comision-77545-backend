const formatearDatos=(req, res, next)=>{
    if(req.body.nombre && typeof req.body.nombre=="string"){
        req.body.nombre=req.body.nombre.toUpperCase()
    }


    console.log("paso por format!!!")

    req.codigo=1000

    next()
}

module.exports={formatearDatos}