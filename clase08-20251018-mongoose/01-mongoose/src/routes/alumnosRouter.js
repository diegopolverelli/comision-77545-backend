import { Router } from 'express';
import { alumnoModelo } from '../dao/models/alumnosModel.js';
import { AlumnosManager } from '../dao/AlumnosManager.js';
import { isValidObjectId } from 'mongoose';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        // let alumnos=await alumnoModelo.find()
        let alumnos=await AlumnosManager.getAlumnos()

        if(alumnos.length>0){
            console.log(alumnos[0])

            let properties=Object.keys(alumnos[0])
            console.log(properties)
        }

        res.setHeader('Content-Type','application/json')
        res.status(200).json({alumnos})
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }

})

router.get("/:id", async(req, res)=>{
    let {id}=req.params

    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de MongoDB`})
    }

    try {
        let alumno=await AlumnosManager.getAlumnoById(id)
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen alumnos con id ${id}`})
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({alumno});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }

})

router.post("/", async(req, res)=>{
    let {name, email, promedio}=req.body
    if(!name || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name | email son requeridos`})
    }
    
    // validaciones pertientes
    try {
        let existe=await AlumnosManager.getAlumnoBy({email})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe un usuario con email ${email}: ${existe.name}`})
        }

        let nuevoAlumno=await AlumnosManager.createAlumno({name, email, promedio})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:`Alumno ${name} creado...!!!`, nuevoAlumno});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})   
    }

})

router.put("/:id", async(req, res)=>{
    let {id}=req.params

    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de MongoDB`})
    }

    try {
        let alumno=await AlumnosManager.getAlumnoById(id)
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen alumnos con id ${id}`})
        }

        let aModificar=req.body
        // validaciones
        if(aModificar._id){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No se puede modificar la propiedad _id`})
        }

        if(aModificar.email){
            let existe=await AlumnosManager.getAlumnoBy({email: aModificar.email, _id:{$ne:id}})
            if(existe){
                res.setHeader('Content-Type','application/json');
                return res.status(400).json({error:`Ya existe otro usuario con email ${aModificar.email}: ${existe.name}`})
            }
        }

        let alumnoModificado=await AlumnosManager.updateAlumno(id, aModificar)

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({message:`modificación realizada`,  alumnoModificado});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }

})

router.delete("/:id", async(req, res)=>{
    let {id}=req.params

    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de MongoDB`})
    }

    try {
        let alumno=await AlumnosManager.getAlumnoById(id)
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen alumnos con id ${id}`})
        }

        let alumnoEliminado=await AlumnosManager.deleteAlumno(id)

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({alumnoEliminado});
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }

})