const {Router} = require("express")
const UsersManager = require("../dao/UsersManager.js")

const router=Router()

router.get("/", async(req, res)=>{
    try {
        let users=await UsersManager.getUsers()   
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({users});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Internal Server Error`})
    }
})

router.post("/", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Alta usuario...!!!"});
})

module.exports={router}