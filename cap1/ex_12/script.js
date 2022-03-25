var conta = Number(prompt("Digite o valor da conta ?"));
var quantidadeClientes = Number(prompt("Quantos clientes vão pagar ?"));

var valorPago = conta / quantidadeClientes;

alert("Valor da Conta R$: " + conta.toFixed(2) 
    + "\nNúmero de Clientes R$: " + quantidadeClientes.toFixed(2)
    + "\nValor por cliente R$: " + valorPago.toFixed(2))