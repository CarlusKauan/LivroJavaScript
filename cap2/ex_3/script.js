function promocao() {
    // referenciar os inputs, e pegando seus valores
    var modelo = document.getElementById("inModelo").value;
    var preco = document.getElementById("inPreco").value;
    // referenciando os inputs de sáida
    var outModelo = document.getElementById("outModelo")
    var outEntrada = document.getElementById("outEntrada")
    var outParcela = document.getElementById("outParcelas")
    
    // processo de fazer a entrada, 'preço / 50 = 50%'
    var entrada = Number(preco) * 0.50;

    // parcelas, divisão de '( preço / 50% ) / 12'
    var parcelas = ( Number(preco) * 0.50 ) / 12;

    // processo das saídas
    outModelo.textContent = "Promoção: " + modelo;
    //toFixed, valores com duas casas decimais.
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcelas.toFixed(2);
}

//referenciando o botão, e fazendo a coisa acontecer com addListener
var btn = document.getElementById("btnPromocao") 
btn.addEventListener('click', promocao)