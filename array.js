const midLaners = ["Zed", "Akali", "Azir", "Katarina"];

// Encontrar a Akali con for
for (let i = 0; i < midLaners.length; i++) {
  if (midLaners[i] === "Akali") {
    console.log("Akali esta en la posicion " + i);
    break;
  }
}

// Encontrar a Akali con find
console.log(
  midLaners.find(function (elemento) {
    if (elemento === "Akali") {
      return true;
    }
  })
);
console.log(midLaners.find((elemento) => elemento === "Akali"));

// Agregar a Yasuo al final del arreglo
midLaners.push("Yasuo");
console.log(midLaners);

// Agregar a Yasuo al inicio del arreglo
midLaners.unshift("Yasuo");
console.log(midLaners);

// Agregar a Yasuo en la posicion 2 del arreglo
midLaners.splice(2, 0, "Yasuo");
console.log(midLaners);

// Eliminar en la posicion 2 del arreglo
midLaners.splice(2, 1);
console.log(midLaners);

// Eliminar la primera posicion del arreglo
midLaners.shift();
console.log(midLaners);

// Eliminar la ultima posicion del arreglo
midLaners.pop();
console.log(midLaners);

// Filtrar arreglo para eliminar a Akali
console.log(midLaners.filter((elemento) => elemento !== "Akali"));

// Ejemplo con forEach
midLaners.forEach((elemento) => console.log(elemento));

// Agregar 2 nuevos campeones al final con concat
console.log(midLaners.concat(["Yone", "Annie"]));
