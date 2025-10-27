import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
    await mongoose.connect(
        process.env.MONGO_URI,
        {
            dbName: "populateDB"
        }
    )
    console.log(` Conectado a populateDB`)
} catch (error) {
    console.log(`Error al conectarse... :( - ${error.message} `)
    process.exit()
}


const cursoModelo = mongoose.model("cursos", mongoose.Schema({
    nombre: String,
    hora: Number,
    docente: String
},
    {
        timestamps: true,
        strict: true,
        collection: "cursosbk77545"
    }
))


const estudiantesModelo = mongoose.model("estudiantes", mongoose.Schema({// cart del e-commerce
    legajo: {
        type: Number,
        unique: true
    },
    nombre: String,
    email: String,
    cursando: {
        type: [
            {
                curso: { // product del e-commerce
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "cursos"
                },
                nota: Number   // quantity del e-commerce

            }
        ]
    }
}))

await cursoModelo.deleteMany({})
await estudiantesModelo.deleteMany({})

const curso1 = await cursoModelo.create({
    nombre: "Backend con Node.js",
    hora: 120,
    docente: "Diego"
})

const curso2 = await cursoModelo.create({
    nombre: "Frontend con React",
    hora: 80,
    docente: "Eduardo Romero"
})

const curso3 = await cursoModelo.create({
    nombre: "Fullstack MERN",
    hora: 200,
    docente: "Brian lapido"
})



let estd1 = await estudiantesModelo.create({
    legajo: 1001,
    nombre: "Werner Koll",
    email: "KwI1o@example.com",
    cursando: [
        {
            curso: curso1._id,
            nota: 8
        },
        {
            curso: curso2._id,
            nota: 9
        },
        {
            curso: curso3._id,
            nota: 7
        }
    ]
})


let estd2 = await estudiantesModelo.create({
    legajo: 1002,
    nombre: "Ana Gomez",
    email: "FjU7o@example.com",
    cursando: [
        {
            curso: curso1._id,
            nota: 10
        },
        {
            curso: curso2._id,
            nota: 10
        }
    ]
})

console.log("***************Estudiantes sin cursos poblados:**********************")

// console.log(JSON.stringify(estd1, null, 4))
// console.log(estd1)


console.log("***************Estudiantes con cursos poblados:**********************")

estd2 = await estudiantesModelo.find().populate("cursando.curso")
console.log(JSON.stringify(estd2, null, 2))


