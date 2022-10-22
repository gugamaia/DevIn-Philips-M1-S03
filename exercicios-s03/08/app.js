console.log('Exercício 08 - Semana 03 - Módulo 01');

const uneDobraRetorna = (vetor, ...extras) => {
    for (let i = 0; i < extras.length; i++) {
      extras[i] *= 2;
    }
    //console.log({ vetor, extras});
    return [...vetor, ...extras];
  };
  
  // versao com map
  const uneDobraRetornaMap = (vetor, ...extras) => {
    const multi = extras.map(num => num * 2);
    return [...vetor, ...multi];
  };
  
  const r1 = uneDobraRetorna([1, 2, 3], 4, 4)
  //console.log(r1) // [1, 2, 3, 8, 8]
  
  const r2 = uneDobraRetornaMap([2], 10, 4, 8) 
  console.log(r2) // [2, 20, 8, 16]
  
  const r3 = uneDobraRetorna([6, 8]) 
  //console.log(r3) // [6, 8]

  