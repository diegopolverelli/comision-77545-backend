const http=require("http")
const url=require("url")
const PORT=3000

// SMTP 25


const app=http.createServer((req, res)=>{

    let urlParse=url.parse(req.url, true)
    console.log(urlParse)

    // console.log(req)
    // console.log(req.url)
    let ruta=req.url.split("?")[0]
    if(urlParse.pathname=="/usuarios"){

        let respuesta=`<h2>Usuarios Page</h2>`
        if(urlParse.query.nombre){
            respuesta+=`<h3>Hola ${urlParse.query.nombre}</3h3>`
        }

        res.setHeader("Content-Type", "text/html; charset=utf-8")
        res.end(respuesta)
        return
    }

    if(urlParse.pathname=="/productos"){

        res.setHeader("Content-Type", "text/html; charset=utf-8")
        res.end(`<h2>Productos Page</h2>`)
        return
    }
    
    
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end(`<h2>Prueba server básico módulo HTTP</h2><p>Pruebas...</p><p>Pruebas II...</p>`)
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})