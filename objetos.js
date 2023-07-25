const akali = {
  nombre: "Akali",
  linea: "mid",
  pasiva: "Asesino sombrío",
  escala1al10deBuenota: 10,
  ulti: function () {
    console.log(`Hola soy ${this.nombre} y te voy a matar`);
  },
};

console.log(akali.nombre);
console.log(akali["nombre"]);

const r = [
  {
    tecla: "Q",
    queHace: "Lanza un shuriken",
  },
  {
    tecla: "W",
    queHace: "Se hace humo",
  },
  {
    tecla: "E",
    queHace: "Se lanza hacia adelante",
  },
  {
    tecla: "R",
    queHace: "Se lanza hacia adelante",
  },
];
