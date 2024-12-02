const readline = require('readline'); 
const conversor = require('./conversor'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log('Escolha uma conversão:');
    console.log('1. Metros para Quilômetros');
    console.log('2. Celsius para Fahrenheit');
    console.log('3. Sair');
}

function iniciarAplicacao() {
    exibirMenu();
    
    rl.question('Digite a opção (1, 2 ou 3): ', (opcao) => {
        if (opcao === '1') {
            rl.question('Digite o valor em metros: ', (metros) => {
                const km = conversor.metrosParaKilometros(parseFloat(metros));
                console.log(`${metros} metros é igual a ${km} quilômetros.`);
                iniciarAplicacao(); 
            });
        } else if (opcao === '2') {
            rl.question('Digite o valor em Celsius: ', (celsius) => {
                const fahrenheit = conversor.celsiusParaFahrenheit(parseFloat(celsius));
                console.log(`${celsius}°C é igual a ${fahrenheit}°F.`);
                iniciarAplicacao(); 
            });
        } else if (opcao === '3') {
            console.log('Saindo da aplicação...');
            rl.close(); 
        } else {
            console.log('Opção inválida. Tente novamente.');
            iniciarAplicacao(); 
        }
    });
}

iniciarAplicacao();