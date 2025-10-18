import mongoose from "mongoose";

export const usuariosModelo=mongoose.model(
    "usuarios", 
    new mongoose.Schema(
        {
            firstName: String, 
            email: {
                type: String, unique: true
            }, 
            password: String, 
            role:{
                type: String, default: "user"
            }
        }, 
        {
            timestamps:true
        }
    )
)

// usuariosModelo.find