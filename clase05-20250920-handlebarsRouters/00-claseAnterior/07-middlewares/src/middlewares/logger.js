const logger=(req, res, next)=>{
    console.log(`Fecha: ${new Date().toUTCString()} - url: ${req.url} metodo: ${req.method}`)

    next()
}

module.exports={logger}