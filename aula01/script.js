alert('Olá, Mundo!');

// nome comum para variáveis
var nomeComumParaVariavel = 'camelCase';

// nomeando entidades, iniciamos com letra maiúscula
var EntidadeEmVariavel = {};

// nome para um dado/valor constante/predefinido
// tudo maiusculo, separado por underline
var TAMANHO_DO_ARRAY = 3;

/*
console.log(typeof 'Olá, Mundo'); // string
console.log(typeof 1983); // numero, independente se é float ou int
console.log(typeof true); // booleano
console.log(typeof undefined); // tipo não definido
console.log(typeof null); // o typooff vê o null como um objeto
console.log(typeof {}); // visto como objeto
console.log(typeof []); // abertura e fechamento de colchetes, são arrays, mas vistos como um objeto
console.log(typeof NaN); // o valor "not a number" é reconhecido como um número
console.log(typeof function {}); //
*/

// valores equivalentes a falso
// console.log(!!false)
// console.log(!!0)
// console.log(!!'')
// console.log(!!null)
// console.log(!!undefined)
// console.log(!!NaN)

// valores equivalentes a true
// console.log(!!true)
// console.log(!!3232)
// console.log(!!'asdfasd')
// console.log(!![])
// console.log(!!{})
// console.log(!!function () {})

var exemplo = 4;
exemplo++
console.log(exemplo);


// inicializa array
var vetor = ['3', 'str', '#', 'true']

// console.log(vetor)
// console.log(vetor[1])
// // atributo importante length
// console.log(vetor.length)

// vetor.push(999)
// vetor.push(111)
vetor.push(555, 444, 333)

// como testar se é um array
// if (Array.isArray(vetor)) {
//   for (var i = 0; i < vetor.length; i++) {
//     console.log(vetor[i])
//   }
// } else {
//   console.log(vetor)
// }

//console.log(vetor.join(' '))

const pessoas = [
  {
    nome: {
      primeiro: 'romeu',
      ultimo: 'casarotto',
    },
    idade: 30,
    ocupacoes: ['programador'],
  },
  {
    nome: 'isaac',
    idade: 30,
    ocupacoes: ['professor'],
  },
]

console.log(pessoas[0].nome.primeiro)


function multiplica(x, y) {
    let acumulador = 0
    for (let i = 0; i < y; i++) {
      acumulador += x
    }
    return acumulador
  }
  
  console.log(multiplica(3, 8))
  