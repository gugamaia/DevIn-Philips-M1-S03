console.log('M01-S03-a02');

//como pegar um elemento do DOM

// const h1 = document.getElementById('titulo');
// console.log(h1);

// indicies do array 0, 1, 2... e por aí vai
const carros = ['fusca', 'fiat 147', 'escort hobby'];
const motos = ['harley', 'kawasaki', 'yamaha', 'biz'];

carros[4] = 'clio';
// console.log(carros);
carros.push('vovorola');
// console.log(carros);

function logaVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log('posição no array: ' + i + ' -> ' + vetor[i])
    }
}

logaVetor(carros);
logaVetor(motos);
