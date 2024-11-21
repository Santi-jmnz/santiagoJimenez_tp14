let peliculas = ["Turno de día","30 noches con mi ex", "Bestia", "El monte", "Top gun maverick","Elvis","Thor: amor y trueno"]

function peliculaMasVendida(peliculaMasVendidaAlMomento) {
   let indiceMasVendida = peliculas.indexOf(peliculaMasVendidaAlMomento);
    let arrayActualizado = peliculas.unshift(peliculas[indiceMasVendida].toUpperCase());
    let arrayFinal = peliculas.splice(indiceMasVendida+1,1)
    return peliculas;
}
console.log(peliculaMasVendida("Thor: amor y trueno"));

let peliculasEstreno = "Counter-Strike, NOP, Vértigo, Nick, Avatar";
console.log("\n películas a estrenar:",peliculasEstreno);
let peliculasEstrenoArray = peliculasEstreno.split(", ");
console.log("\n peliculas a estrenar:",peliculasEstrenoArray);

let todasLasPeliculas = peliculas.concat(peliculasEstrenoArray);
console.log("\nArray de la lista completa con todas las películas:\n\n",todasLasPeliculas)
