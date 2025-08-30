let texto="prueba"
texto='otra prueba'

let nombre="Juan"

let textoOrdenCompra="Se ha realizado la compra!"
let textoFinal="Hola "+nombre+"...!!!\n\t- "+textoOrdenCompra
console.log(textoFinal)

let importe=9700

textoFinal=`
Hola ${nombre}...!!!
    - ${textoOrdenCompra}

    Importe del pedido: $ ${importe}

    etc...

`

let userCode="00009"
nombre=`Mariana ${userCode}`

console.log(textoFinal)
