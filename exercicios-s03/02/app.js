console.log('Exercício 02 - Semana 03 - Módulo 01')

const campoNome = document.getElementById('nome');
const botao = document.getElementById('botao');
const paragrafo = document.getElementById('paragrafo');

const mensagemOla = (nome) => `Olá, ${nome}!`;
/*equivalente
    mensagemOla = () => {
        return("Olá, " + nome + "!");
    };
    */

// console.log(mensagemOla('Mariana'));

botao.addEventListener('click', () => {
    const nome = campoNome.value;
    const mensagem = mensagemOla(nome);
    paragrafo.innerHTML = mensagem;
    console.log(mensagem);
  });

