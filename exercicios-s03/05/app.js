console.log('Exercício 05 - Semana 03 - Módulo 01');

function somaTudo(...numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
      acumulador += numeros[i];
    }
    return acumulador;
  }
  
  // versao com forEach
  function somaTudoFE(...numeros) {
    let acumulador = 0;
    numeros.forEach(num => {
      acumulador += num;
    });
    return acumulador;
  }
  
  // versao arrow function
  const somaTudoAF = (...numeros) => {
    let acumulador = 0;
    numeros.forEach(num => {
      acumulador += num;
    });
    return acumulador;
  }
  
  const resultado = somaTudo(1, 2, 3, 4);
  
  console.log(resultado);
  // resultado deve ser 10
  
  // versao arrow function e reduce
  const somaTudoReduce = (...numeros) => {
    return numeros.reduce((acumulador, num) => {
      return acumulador + num;
    }, 0);
  }
  
  console.log(somaTudoReduce(10, 20, 30));
