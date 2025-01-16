

// 1) Observe o trecho de código abaixo:
//  int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
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
let entrada = 33;
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
    console.log(entrada + " pertence à sequência de Fibonacci.");
  } else {
    console.log(entrada + " não pertence à sequência de Fibonacci.");
  }
})();


