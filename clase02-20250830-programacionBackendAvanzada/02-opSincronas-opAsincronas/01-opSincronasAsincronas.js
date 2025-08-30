let numero=1

// console.log(`op ${numero}`)
// numero++
// console.log(`op ${numero}`)
// numero++
// console.log(`op ${numero}`)
// numero++
// console.log(`op ${numero}`)
// numero++


let i01=setInterval(() => {
    console.log(`operacion ${numero}`)
    numero++
    if(numero>10) clearInterval(i01)
    }, 1000);  // tiempo en ms

let numero2=1
let i02=setInterval(() => {
    console.log(`proceso ${numero2}`)
    numero2++
    if(numero2>10) clearInterval(i02)
}, 300);  // tiempo en ms







