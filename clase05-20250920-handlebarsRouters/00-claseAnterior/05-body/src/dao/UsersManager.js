const fs=require("fs")
const crypto=require("crypto")


class UsersManager{
    static #users=[]
    static path="./datos.json"

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
        // if(!nombre || !email || !password){
        //     return `Complete los datos!`
        // }


        await this.getUsers()

        // let existe=this.#users.find(u=>u.email==email)
        // if(existe){
        //     return `Ya existe un usuario con email ${email}: ${existe.nombre}`
        // }

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

module.exports={UsersManager}
