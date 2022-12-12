

function invertirNombre(nombre) {
    let invertida = "";

    for (let index = nombre.length; index >= 0; index--) {
        invertida+= nombre.charAt(index);
    }
    return invertida;
}