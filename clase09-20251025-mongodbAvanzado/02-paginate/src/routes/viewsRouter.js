import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router = Router()

router.get('/usuarios', async (req, res) => {
    try {
        let { limit, page } = req.query

        let { docs: usuarios, totalPages, hasPrevPage, hasNextPage, prevPage, nextPage, } = await UsuariosManager.getUsuarios(limit, page)

        /* -------------------- MUOSTRAR LO QUE TRAE PAGINATE-V2 -------------------- */

        console.log({ totalPages, hasPrevPage, hasNextPage, prevPage, nextPage })


        /* -------------------- RENDERIZAR LA VISTA CON LOS DATOS -------------------- */

        res.render("usuarios", {
            usuarios,
            totalPages, hasPrevPage, hasNextPage, prevPage, nextPage
        })
    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: `Internal server error` })
    }
})