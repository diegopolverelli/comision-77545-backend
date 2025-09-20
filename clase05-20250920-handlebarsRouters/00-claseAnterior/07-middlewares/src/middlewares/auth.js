const auth=(req, res, next)=>{
    let {user, password}=req.query
    if(user!="admin" || password!="123"){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`No esta autorizado!`})
    }

    next()
}

module.exports={auth}