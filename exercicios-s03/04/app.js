console.log('Exercício 04 - Semana 03 - Módulo 01');


function mesclaObjetos(objeto1, objeto2) {
  return { ...objeto1, ...objeto2};
}

// equivalente em arrow function
const mesclaObjArrow = (o1, o2) => ({ ...o1, ...o2 });
// obs.: precisa dos parentesis

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

const novoObjeto = mesclaObjetos(objUm, objDois);

console.log(novoObjeto);
// { a: 1, b: 2, c: 3, d: 4 }
