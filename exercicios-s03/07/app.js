console.log('Exercício 07 - Semana 03 - Módulo 01');

function montaMensagem(pessoa) {
    const { nome, idade, profissao } = pessoa;
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
  }
  
  const montaArrow = ({ nome, idade, profissao }) =>
   `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
  
  const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  };
  
  const msg = montaArrow(pessoa);
  
  console.log(msg);
  