const { VillanosManager } = require('../dao/VillanosManager.js');

const Router=require('express').Router;
const router=Router()

router.get('/villanos',async(req,res)=>{

    let villanos=await VillanosManager.getVillanos()
   
    res.render("villanos",{
        villanos
    })
})


module.exports={router}