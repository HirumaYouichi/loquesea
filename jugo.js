function jugo(nombre, ano) {
    const edad = 2023 - ano
    return "Hola mi nombre es " + nombre + " Mi edad es " + edad
}

console.log(jugo("edgar", 1998))
console.log(jugo("edgar", 2003))
console.log(jugo("edgar", 1978))

console.log("=========================================")

function escroto(producto, caducidad, peso, sabor) {
    return `Tu producto es ${producto} \n
    Caduca ${caducidad} \n
    Pesa ${peso} \n
    Su sabor es ${sabor} `
}
const sabortrikitrakes = "cagada"
const prodcuto1 = escroto("Trikitakes", 2024, "50g", sabortrikitrakes)
console.log(prodcuto1)

console.log("=========================================")

function wasd(rol) {
    if (rol === "mid") {
        return "Ahuevo si es"
    }
    else {
        return "no es"
    }
}
console.log(wasd("mid"))

console.log("=========================================")

const campeon1 = {
    nombre: "Teemo",
    linea: "Top",
    usaMana: true,
    ninoOnina: "Niño",
    habilidades: [
        { tecla: "Q", quehace: "Mete Cegar " },
        { tecla: "W", quehace: "Corre " },
        { tecla: "E", quehace: "Mete Veneno " },
        { tecla: "R", quehace: "Saca Hongos " },

    ]
}
const campeon2 = {
    nombre: "Ahri",
    linea: "Mid",
    usaMana: true,
    ninoOnina: "Niña",
    habilidades: [
        { tecla: "Q", quehace: "Lanza Orbe " },
        { tecla: "W", quehace: "Saca Fuegos " },
        { tecla: "E", quehace: "BesoGay " },
        { tecla: "R", quehace: "CorreLaPuta " },

    ]
}
const campeon3 = {
    nombre: "Lee",
    linea: "Jg",
    usaMana: false,
    ninoOnina: "Niño",
    habilidades: [
        { tecla: "Q", quehace: "Avienta un Kamehameha " },
        { tecla: "W", quehace: "Te proteje como diosito " },
        { tecla: "E", quehace: "Le pega un putazo al pizo " },
        { tecla: "R", quehace: "Patada Nuclear " },

    ]
}

const campeon4 = {
    nombre: "Soraka",
    linea: "Supp",
    usaMana: true,
    ninoOnina: "Niña",
    habilidades: [
        { tecla: "Q", quehace: "Abienta un poder morado " },
        { tecla: "W", quehace: "IMSS " },
        { tecla: "E", quehace: "Shhhilencio " },
        { tecla: "R", quehace: "Ten Fé " },

    ]
}

const campeon5 = {
    nombre: "Jinx",
    linea: "Adc",
    usaMana: true,
    ninoOnina: "Niña",
    habilidades: [
        { tecla: "Q", quehace: "Abienta Cuhetes " },
        { tecla: "W", quehace: "Rayo Homosexualizador " },
        { tecla: "E", quehace: "Pirañas Fifiadas " },
        { tecla: "R", quehace: "Misil de Hiroshima " },

    ]
}

const lol=[campeon1, campeon2, campeon3, campeon4, campeon5]

console.log ("Total De Campeones: "+ lol.length ) 

lol.push({
    nombre: "Jesucristo",
    linea: "Cielo",
    usaMana: true,
    ninoOnina: "Gay",
    habilidades: [
        { tecla: "Q", quehace: "Combierte el agua en vino " },
        { tecla: "W", quehace: "Se hace el cruzificado " },
        { tecla: "E", quehace: "Camina sobre el agua " },
        { tecla: "R", quehace: "Resucita al 3er dia " },

    ]
})
console.log ("Total De Campeones: "+ lol.length ) 

lol.unshift ({
    nombre: "Satanas",
    linea: "Mid",
    usaMana: true,
    ninoOnina: "Nobinario",
    habilidades: [
        { tecla: "Q", quehace: "Te pica con el tridente " },
        { tecla: "W", quehace: "Te abienta fuego " },
        { tecla: "E", quehace: "Te dice que comas carne en vigilia " },
        { tecla: "R", quehace: "Te jala las patas en la noche " },

    ]
})
console.log ("Total De Campeones: "+ lol.length ) 
console.log (lol ) 

const Midlaners=lol.filter(elemento=>elemento.linea ==="Mid") 
console.log (Midlaners )
