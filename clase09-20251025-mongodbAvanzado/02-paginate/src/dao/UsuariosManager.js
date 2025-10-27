import { usuariosModelo } from "./models/usuariosModelo.js";

export class UsuariosManager {
    static async getUsuarios(limit = 15, page = 1) {
        return await usuariosModelo.paginate({}, { limit, page, lean: true })
    }
}