import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import { router as vistasRouter } from './routes/viewsRouter.js';
import { router as usuariosRouter } from './routes/usuariosRouter.js';
import dotenv from 'dotenv';
import { run } from '../seed.js';
dotenv.config();



const PORT = 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use("/api/usuarios", usuariosRouter)
app.use("/", vistasRouter)

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ payload: "OK" });
})

app.listen(PORT, () => {
    console.log(`Server escuchando en puerto http://localhost:${PORT}`);
});


export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI,
            { dbName: "paginateDB" }
        );
        console.log(" Conectado a paginateDB");
    } catch (error) {
        console.error(`Error al conectar DB: ${error.message}`);
    }
    await run();
};

connectDB()
