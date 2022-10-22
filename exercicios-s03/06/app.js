console.log('Exercício 06 - Semana 03 - Módulo 01');

function verificaPalindromo(texto) {
    if (typeof texto !== 'string') {
      console.log('Texto inválido!');
      return false; // interrompe a execuçao da funcao
    }
  
    const meio = texto.length / 2;
    const fim = texto.length - 1;
   
    for (let i = 0; i < meio; i++) {
      if (texto[i] !== texto[fim - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // versao arrow com reverse
  const verificaPalindromoB = texto => {
    if (typeof texto !== 'string') {
      console.log('Texto inválido!');
      return false; // interrompe a execuçao da funcao
    }
    return [...texto].reverse().join('') === texto;
  }
  
  const teste1 = verificaPalindromoB("ana");
  console.log('ana', teste1);
  // true
  
  const teste2 = verificaPalindromoB("julia");
  console.log('julia', teste2);
  // false
  