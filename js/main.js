//Comentario

let cadena = "Abraham".toLowerCase();
let posicion = cadena.charAt(0);
let contador = 0;
let letra = "";
function contadorRepetido(cadena) {
    
    for (let i = 0; i < cadena.length; i++) {
        if (posicion == cadena.charAt(i)) {
            contador++;
            letra = cadena.charAt(posicion);
        }
    }
    return console.log(`La letra '${letra}' se repite ${contador} veces`);
}

function contadorRepetido2(cadena) {
    let contador2 = 0;
    for (let i = 0; i < cadena.length; i++) {
        for (let j = i + 1; j < cadena.length; j++) {
            if (cadena.charAt(j) == cadena.charAt(i)) {
                contador2++;
                letra = cadena.charAt(i);
            }
        }
        
    }
    return console.log(`La letra '${letra}' se repite ${contador2} veces`);
}