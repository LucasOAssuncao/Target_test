// ==================================================
// Questão 3: Análise de faturamento diário
// ==================================================
/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

const fs = require('fs');

function analisarFaturamento(path) {
    fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        const dados = JSON.parse(data);
        const faturamento = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);

        const menor = Math.min(...faturamento);
        const maior = Math.max(...faturamento);
        const media = faturamento.reduce((acc, valor) => acc + valor, 0) / faturamento.length;
        const diasAcimaMedia = faturamento.filter(valor => valor > media).length;

        console.log(`Menor valor de faturamento: ${menor}`);
        console.log(`Maior valor de faturamento: ${maior}`);
        console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
    });
}

analisarFaturamento('faturamento.json');
