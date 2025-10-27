import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const usuariosEsquema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        gender: String,
        codigo: Number
    },
    {
        timestamps: true,
        collection: 'users5k'
    }
)

usuariosEsquema.plugin(mongoosePaginate)

export const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)