function jugo (nombre, ano){
    const edad = 2023 - ano
    return "Hola mi nombre es " + nombre + " Mi edad es " + edad 
}

console.log(jugo("edgar", 1998)) 
console.log(jugo("edgar", 2003))
console.log(jugo("edgar", 1978))

console.log("=========================================")

function escroto (producto, caducidad, peso, sabor){
    return `Tu producto es ${producto} \n
    Caduca ${caducidad} \n
    Pesa ${peso} \n
    Su sabor es ${sabor} `
}
const sabortrikitrakes = "cagada"
const prodcuto1 = escroto ("Trikitakes", 2024, "50g", sabortrikitrakes)
console.log(prodcuto1)

console.log("=========================================")

function wasd (rol){
    if(rol === "mid"){
        return "Ahuevo si es"
    }
    else{
        return"no es"}
}
console.log(wasd("mid"))
