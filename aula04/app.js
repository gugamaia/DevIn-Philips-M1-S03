console.log('M1-S03-A4');

// Mais exemplos de escopo
// let nome = 'inicializado';
// if (1) {
//   let nome = 'bloco';
// }
// function teste() {
//   let nome = 'função';
// }
// teste();
// console.log({ nome })


// Exemplo Rest
function somaParametros(...numeros) {
  console.log({ numeros });
  let acumulador = 0;
  numeros.forEach(numero => acumulador += numero);
  return acumulador;
}
// const resultado = somaParametros(1, 2, 3, 4, 5, 6);
// console.log({ resultado });

// Exemplo Spread de Arrays
// const vetorA = [1, 2, 3];
// const vetorB = [55, ...vetorA, 66, 77];
// const vetorC = [...vetorA, ...vetorB];
// console.log(vetorA);
// console.log(vetorB);
// console.log(vetorC);

// Exemplo Spread de Objetos
// const objetoA = { a: 1, b: 2, c: 3 };
// const objetoB = { b: 55, ...objetoA, c: 66, d: 77 };
// //const objetoC = { ...objetoB, ...objetoA };
// console.log(objetoA);
// console.log(objetoB);
// //console.log(objetoC);

// Exemplo Destructuring Vetor
function calculaPontoV(pontoA, pontoB) {
  const [xA, yA] = pontoA; // [3, 9]
  const [xB, yB] = pontoB; // [4, 10]

  // equivalente à
  // const xA = pontoA[0];
  // const yA = pontoA[1];
  // const xB = pontoB[0];
  // const yB = pontoB[1];

  console.log({ pontoA, pontoB });

  return [xB - xA, yB - yA];
}
//const resultV = calculaPontoV([3, 9], [4, 10]);
//console.log({ resultV });

// Exemplo Destructuring Objeto
function procuraTermo(params) {
  const {
    texto,
    termo,
    ...rest
  } = params;

  console.log({ texto, termo, rest })

  return texto.includes(termo);
}
// console.log(
//   procuraTermo({
//     texto: "O rato roeu a roupa do rei de Roma.",
//     termos: "rato",
//     contexto: "exemplos da aula",
//   })
// );

// Exemplo Destructuring Objeto Renomeado
function calculaPontoO(pontoA, pontoB) {
  const { x: xA, y: yA } = pontoA;
  const { x: xB, y: yB } = pontoB;

  console.log({ xA, yA, xB, yB });

  return {
    x: xB - xA,
    y: yB - yA
  };
}
// const resultO = calculaPontoO(
//   { x: 3, y: 9, z: 'asdas'},
//   { x: 4, y: 10}
// );
// console.log('r', resultO);

// optional chaining?
// const objeto = { chave: 'olaaa' };
// console.log(objeto?.chave)

// Exemplo Spreading Objetos
const objA = {
  nome: 'Romeu',
  idade: 30,
  profissao: 'programador'
};
const objB = {
  nome: 'Isaac',
  idade: 29,
  ocupacao: 'professor'
 };

// const concatenado = { ...objB, ...objA };
// console.log(concatenado);


// ainda sobre Destructuring
const carros = ['escort', 'fusca', 'opala'];
const [ , , carro3] = carros;
//console.log(carro3);


const pessoas = [
  {
    nome: 'Romeu',
    idade: 30,
    profissao: 'programador'
  },
  {
    nome: 'Isaac',
    idade: 29,
    ocupacao: 'professor'
  }
];

const [{ idade, nome }, ...resto] = pessoas;

console.log(nome, idade, resto);

// para pausar o codigo no navegador
// debugger;
