import mongoose from "mongoose";

const alumnoSchema=new mongoose.Schema(
    {
        name: String, 
        email: {
            type: String, 
            unique: true, 
            required: true, 
        }, 
        promedio: Number, 
        role: {
            type: String, 
            default: "user"
        }
    }, 
    {
        timestamps: true, 
        // strict: false,
        // collection: "alumnos2021",
    }
)

export const alumnoModelo=mongoose.model(
    "alumnos2", 
    alumnoSchema
)

