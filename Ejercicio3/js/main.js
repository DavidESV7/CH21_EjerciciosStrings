
function palindromo(frase) {
    frase ="ana";
    let inicio = 0;
    let palindrome = false;
    let fin = frase.length;
    while (inicio < fin && !palindrome) {
        if (frase.charAt(inicio) == frase.charAt(fin) ) {
            inicio++;
            fin--;
        }else{
            palindrome = true;
        }
    }
    if (!palindrome) {
        `${frase} es un palindromo`;
    }else{
        `${frase} no es un palindromo`;
    }
   return palindrome;
}