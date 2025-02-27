// ==================================================
// Questão 2: Verificação de número na sequência de Fibonacci
// ==================================================
/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function isFibonacci(numero) {
    let a = 0, b = 1;
    while (b < numero) {
        [a, b] = [b, a + b];
    }
    return b === numero;
}

function verificarFibonacci() {
    const numero = parseInt(prompt("2) Informe um número para verificar se pertence à sequência de Fibonacci:"));
    if (isFibonacci(numero)) {
        console.log(`2) O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`2) O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

verificarFibonacci();
