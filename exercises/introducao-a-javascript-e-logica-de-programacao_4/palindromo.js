  
  function ehPalindromo(palavra) {
    let inverte = palavra.split("").reverse().join("");
    if (inverte === palavra) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log('É palindromo: ' + ehPalindromo('arara')); 
  console.log('É palindromo: ' + ehPalindromo('desenvolvimento')); 
