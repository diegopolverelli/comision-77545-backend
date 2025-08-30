// Crear una clase llamada ProductManager que gestione un conjunto de 
// productos.
// Aspectos a Incluir:
// La clase debe crearse desde su constructor con el elemento products, 
// el cual será un arreglo vacío.

// Cada producto gestionado debe contar con las siguientes propiedades:
// - title (nombre del producto)
// - description (descripción del producto)
// - price (precio)
// - thumbnail (ruta de imagen)
// - code (código identificador)
// - stock (número de piezas disponibles)

// Métodos a Implementar
// addProduct: Este método debe agregar un producto al arreglo de productos
// inicial.
// Debe validar que no se repita el campo code y que todos los campos sean 
// obligatorios.
// Al agregar un producto, debe crearse con un id autoincrementable.

// getProducts: Este método debe devolver el arreglo con todos los 
// productos creados hasta el momento.

// getProductById: Este método debe buscar en el arreglo el producto que 
// coincida con el id.
// En caso de no encontrar ningún id coincidente, debe mostrar en consola 
// el error "Not found".

// let productos=[]

class ProductsManager{
    #productos
    // #ultNro=0

    constructor(){
        this.#productos=[]
    }

    addProduct(title, price, description, stock, code ){
        // validaciones pertinentes
        let existe=this.#productos.find(p=>p.code==code)
        if(existe){
            console.log(`Ya existe un producto con code ${code}: ${existe.description}`)
            return 
        }

        // validar que lleguen todas las properties
        if(!title || !price || !description || !code){
            console.log(`title, price, description, code son requeridos`)
            return 
        }

        let id=1
        if(this.#productos.length>0){   // [{id:1, title: "campera"}, {id:2, title: "campera 2"}, {id:3, title: "remera"}, {id:4, title: "remera II"}]
            id=this.#productos[this.#productos.length-1].id +1
        }

        let nuevoProducto={
            id, 
            title, 
            description,
            price, 
            stock, 
            code
        }

        this.#productos.push(nuevoProducto)
        return nuevoProducto
    }

    getProducts(){
        return this.#productos
    }

    getProductById(id){

        // validaciones: que el id que llega como arg. sea del mismo tipo que los id que mantengo

        let producto=this.#productos.find(p=>p.id==id)
        if(!producto){
            return `No existen productos con id ${id}`
        }

        return producto
    }

}


let productsManager=new ProductsManager()

console.log(productsManager.getProducts())
productsManager.addProduct("producto 1", 100, "prod 01 desc.", 100, "pr001")
productsManager.addProduct("producto 2", 100, "prod 02 desc.", 100, "pr002")
productsManager.addProduct("producto 3", 100, "prod 03 desc.", 100, "pr003")
productsManager.addProduct("producto 3", 100, "prod 03 desc.", 100)
productsManager.addProduct("producto 4", 100, "prod 04 desc.", 100, "pr004")

console.log(productsManager.getProducts())

console.log(productsManager.getProductById(3))
console.log(productsManager.getProductById(90))
console.log(productsManager.getProductById(2))
// console.log(productsManager.getProductBy({title:"campera"}))
// console.log(productsManager.getProductBy({price:100}))

// productsManager.addProduct