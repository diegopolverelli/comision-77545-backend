const {Router} =require("express")
const PetsManager = require("../dao/PetsManager.js")
// const express=require("express")
// const router=express.Router()

const petsRouter=Router()

petsRouter.get("/", async(req, res)=>{
    try {
        let pets=await PetsManager.getPets()

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({pets});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Internal Server Error`})
    }
})

petsRouter.put("/donar", async(req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Donar mascota!"});
})

petsRouter.post("/", (req,res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Crea mascota!"});
})


module.exports={petsRouter}