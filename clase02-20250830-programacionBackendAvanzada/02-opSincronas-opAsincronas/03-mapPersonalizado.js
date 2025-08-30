const miMap=(datos=[], cb)=>{   // cb=función de callback
    let resultado=[]

    for(let i=0; i<datos.length; i++){
        let auxiliar=cb(datos[i])
        resultado.push(auxiliar)
    }

    return resultado
}

let numeros=[1,2,3,4,5]
let doble=numeros.map(n=>n*2)
console.log(numeros)
console.log(doble)
doble=miMap(numeros, n=>n*2)
console.log(doble)

let suma5=miMap(numeros, n=>n+5)
console.log(suma5)

const starWarsCharacters = [
    {
        id: 1,
        name: "Luke Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 2,
        name: "Darth Vader",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 3,
        name: "Princess Leia Organa",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 4,
        name: "Emperor Palpatine",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 5,
        name: "Han Solo",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 6,
        name: "Boba Fett",
        affiliation: "Villain",
        species: "Human",
        weapon: "Blaster",
        side: "Neutral"
    },
    {
        id: 7,
        name: "Obi-Wan Kenobi",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 8,
        name: "Count Dooku",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 9,
        name: "Rey",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 10,
        name: "Kylo Ren",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 11,
        name: "Yoda",
        affiliation: "Hero",
        species: "Yoda's species",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 12,
        name: "Maul",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Double-bladed lightsaber",
        side: "Dark"
    },
    {
        id: 13,
        name: "Chewbacca",
        affiliation: "Hero",
        species: "Wookiee",
        weapon: "Bowcaster",
        side: "Light"
    },
    {
        id: 14,
        name: "General Grievous",
        affiliation: "Villain",
        species: "Kaleesh",
        weapon: "Multiple lightsabers",
        side: "Dark"
    },
    {
        id: 15,
        name: "Anakin Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 16,
        name: "Jabba the Hutt",
        affiliation: "Villain",
        species: "Hutt",
        weapon: "None",
        side: "Neutral"
    },
    {
        id: 17,
        name: "Lando Calrissian",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 18,
        name: "Admiral Thrawn",
        affiliation: "Villain",
        species: "Chiss",
        weapon: "Strategist",
        side: "Dark"
    },
    {
        id: 19,
        name: "Padmé Amidala",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 20,
        name: "Asajj Ventress",
        affiliation: "Villain",
        species: "Dathomirian",
        weapon: "Dual lightsabers",
        side: "Dark"
    },
]

miMap(starWarsCharacters, p=>{
    if(p.id%2==0){
        console.log(p.id, p.name)
    }
})

numeros=[1, 7, 12]
miMap(numeros, n=>{
    let personaje=starWarsCharacters.find(p=>p.id==n)
    if(personaje) console.log({
        ...personaje, 
        name: personaje.name.toUpperCase()
    })
})