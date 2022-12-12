
function invertirNombre(nombre) {
    let invertida = "";

    for (let index = nombre.length; index >= 0; index--) {
        invertida+= nombre.charAt(index);
    }
    return invertida;
}


function esPalindromo(str) {
    str = str.toLowerCase();
    str = str.replaceAll(" ","");
    if (invertirNombre(str)== str) {
        return true;
    }
    return false;
}