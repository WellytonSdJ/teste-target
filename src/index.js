

// 1) Observe o trecho de código abaixo:
//  int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
console.log('\n#1 - SOMATOTAL');
(function somaTotal() {
  let indice = 13
  let soma = 0
  for (let k = 0; k < indice; k++) {
    soma = soma + k
    console.log(soma) // imprimir soma
  };
 console.log('soma final', soma) // RETORNO === 78
})()

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
console.log(`\n#2 - FIBONNACCI \n`)
let entrada = 34;
(function checkFibonacci() {
  let first = 0;
  let second = 1;
  let found = false;

  while (first <= entrada) {
    if (first === entrada) {
      found = true;
      break;
    }
    let temp = first;
    first = second;
    second = temp + second;
  }

  if (found) {
    console.log(entrada + " pertence à sequência de Fibonacci."); // 34 pertence à sequencia de fibonnacci
  } else {
    console.log(entrada + " não pertence à sequência de Fibonacci."); // 33 não pertence à sequência de Fibonacci.
  }
})();


// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

console.log(`\n#3 - FATURAMENTOS \n`)
const faturamento = require('./faturamento.json')
// eliminando os dias de finais de semana e feriados (item.valor === 0)
const faturamentos = faturamento.filter(item => item.valor !== 0 && item.diaSemana !== 'sabado' && item.diaSemana !== 'domingo');

(function checkFaturamento() {
  // primeiro iniciamos as variaveis
  let menorFaturamento = faturamentos[0]
  let maiorFaturamento = faturamentos[0]
  let soma = 0
  let diasAcimaMedia = 0


  // percorre o vetor de faturamento, soma todos os valores e guarda o menor e o maior valor
  faturamentos.forEach(item => {
    soma += item.valor
    if (item.valor < menorFaturamento.valor) {
      menorFaturamento = item
    }
    if (item.valor > maiorFaturamento.valor) {
      maiorFaturamento = item
    }
  });

  // Calcula a média de faturamento e conta o número de dias com faturamento acima da média
  const media = soma / faturamentos.length
  faturamentos.forEach(item => {
    if (item.valor > media) {
      diasAcimaMedia += 1
    }
  });

  console.log(`O menor valor de faturamento foi de R$ ${menorFaturamento.valor} no dia ${menorFaturamento.dia}.`)
  console.log(`O maior valor de faturamento foi de R$ ${maiorFaturamento.valor} no dia ${maiorFaturamento.dia}.`)
  console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de ${diasAcimaMedia} dias.`)
})()

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Calcula o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.


console.log('\n#4 - FATURAMENTO MENSAL \n')
const faturamentoMensal = [
  { estado: 'SP', valor: 'R$67.836,43' },
  { estado: 'RJ', valor: 'R$36.678,66' },
  { estado: 'MG', valor: 'R$29.229,88' },
  { estado: 'ES', valor: 'R$27.165,48' },
  { estado: 'Outros', valor: 'R$19.849,53' }
];

function calcularPercentual(faturamento) {
  // soma todos os valores de faturamento e guarda na variavel total
  // o reduce percorre o vetor faturamento e para cada item,
  // converte o valor para numero (removendo R$ e trocando , por .)
  // e soma o valor convertido ao acumulador (acc)
  const total = faturamento.reduce((acc, item) => {
    const valorNumerico = parseFloat(item.valor.replace('R$', '').replace('.', '').replace(',', '.'));
    return acc + valorNumerico;
  }, 0);

  faturamento.forEach(item => {
    const valorNumerico = parseFloat(item.valor.replace('R$', '').replace('.', '').replace(',', '.'));
    const percentual = (valorNumerico / total) * 100;
    console.log(`O percentual de ${item.estado} é ${percentual.toFixed(2)}%`);
  });
}

calcularPercentual(faturamentoMensal);

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

console.log(`\n#5 Inverter String \n`)
const inverterString = str => {
  // Percorre a string de trás pra frente e soma cada caracter em uma variável, invertendo a ordem dos caracteres.
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

console.log(inverterString('Olá, mundo!'));

