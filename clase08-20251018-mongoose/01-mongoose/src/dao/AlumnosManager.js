import { alumnoModelo } from "./models/alumnosModel.js";

export class AlumnosManager{

    static async getAlumnos(filtro={}){
        return await alumnoModelo.find(filtro).lean()   
    }

    static async getAlumnoById(id){
        // return await alumnoModelo.findOne({_id:id})
        return await alumnoModelo.findById(id).lean()
    }

    static async getAlumnoBy(filtro={}){    //{email:"leti2024test.com"}  o   {name:{$regex: /juan/i}}    o {_id:"68f3b9fc847db72df71769b7"}
        // return await alumnoModelo.findOne({_id:id})
        return await alumnoModelo.findOne(filtro).lean()
    }

    static async createAlumno(alumno){
        let nuevoAlumno=await alumnoModelo.create(alumno)
        return nuevoAlumno.toJSON()
    }

    static async updateAlumno(id, datosActualizar){
        // return await alumnoModelo.updateOne({_id:id}, datosActualizar)
        return await alumnoModelo.findByIdAndUpdate(id, datosActualizar, {new: true})
    }

    static async deleteAlumno(id){
        return await alumnoModelo.findByIdAndDelete(id, {new: true})
    }
}