// "[{id:1, name:'Juan'}, {id:2, name:'Juan'}]"

let productos=[
    { id: 1, code: 'PROD001', title: 'Camiseta Negra', stock: 20, price: 19.99, descrip: 'Camiseta de algodón', status: true },
    { id: 2, code: 'PROD002', title: 'Pantalón Jeans', stock: 15, price: 39.99, descrip: 'Jeans clásico', status: true },
    { id: 3, code: 'PROD003', title: 'Camisa Verde manga corta', stock: 12, price: 28.99, descrip: 'Camisa manga corta', status: true },
    { id: 4, code: 'PROD004', title: 'Pantalón Verde', stock: 32, price: 39.99, descrip: 'Jeans clásico color', status: true },
    { id: 5, code: 'PROD005', title: 'Camisa Negra manga corta', stock: 20, price: 28.99, descrip: 'Camisa manga corta', status: false },
    { id: 6, code: 'PROD006', title: 'Pantalón Corto', stock: 14, price: 39.99, descrip: 'Pantalon deportivo corto', status: true },
    { id: 7, code: 'PROD007', title: 'Camiseta Roja', stock: 20, price: 19.99, descrip: 'Camiseta de algodón', status: true },
    { id: 8, code: 'PROD008', title: 'Camisa Blanca', stock: 21, price: 32.99, descrip: 'Camisa de vestir', status: true },
    { id: 9, code: 'PROD009', title: 'Camiseta Celeste', stock: 32, price: 19.99, descrip: 'Camiseta de algodón', status: false },
    { id: 10, code: 'PROD010', title: 'Camisa Blanca manga corta', stock: 7, price: 28.99, descrip: 'Camisa manga corta', status: true },
]

let texto=JSON.stringify(productos, null, "\t")
// console.log(texto)

productos=JSON.parse(texto)
// console.log(productos)

texto=JSON.stringify(productos, ["id", "title"], 5)
// console.log(texto)

const replace=(k, v)=>{
    if(k=="title"){
        return v.toUpperCase()
    }

    if(k=="price"){
        return v + 100_000
    }

    return v
}

texto=JSON.stringify(productos, replace, 5)
// console.log(texto)

const fs=require("fs")
const crypto=require("crypto")


class UsersManager{
    static #users=[]
    static path="./datos.json"

    // constructor(){
    //     this.prueba=100
    // }
    static async getUsers(){
        if(fs.existsSync(this.path)){
            this.#users=JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
            return this.#users
        }else{
            return []
        }
    }

    static async addUser(nombre, email, password){
        // validaciones
        if(!nombre || !email || !password){
            return `Complete los datos!`
        }


        await this.getUsers()

        let existe=this.#users.find(u=>u.email==email)
        if(existe){
            return `Ya existe un usuario con email ${email}: ${existe.nombre}`
        }

        let id=1
        if(this.#users.length>0){
            id=Math.max(...this.#users.map(d=>d.id))+1
        }
        
        let nuevoUsuario={
            id, 
            nombre, 
            email, 
            password: crypto.createHmac("sha256", "password123").update(password).digest("hex")
        }        

        this.#users.push(nuevoUsuario)
        await fs.promises.writeFile(this.path, JSON.stringify(this.#users, null, 5))
        return nuevoUsuario

    }    

}

// let um=new UsersManager()
// um.prueba


// UsersManager.users.push({id:"asdfasdf"})

const usuario=async()=>{
    UsersManager.path="./users.json"
    
    console.log(await UsersManager.getUsers())
    
    console.log(await UsersManager.addUser("Diego", "diego@test.com", "12345"))
    console.log(await UsersManager.addUser("Laura", "laura@test.com", "12345"))
    console.log(await UsersManager.addUser("Maria Laura", "marialaura@test.com", "12345"))
    console.log(await UsersManager.addUser("Pedro", "pedro@test.com", "12345"))
    console.log(await UsersManager.addUser("Lorena", "lore2023@test.com", "12345"))

    console.log(await UsersManager.getUsers())
}

usuario()

