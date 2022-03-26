function promocao(){
    //referenciar os inputs, outputs
    var inDescricao = document.getElementById("inDescricao");
    var inPromocao = document.getElementById("inPromocao");
    
    var outDescricao = document.getElementById("outDescricao");
    var outValor = document.getElementById("outValor");

    var descricao = inDescricao.value;
    var promocao = Number(inPromocao.value);
    // Math.floor() = arrendondamento para baixo
    var promocaoProduto = Math.floor(promocao * 2)

    outDescricao.textContent = "Promoção de " + descricao
    outValor.textContent = "Leve 2 por apenas R$: " + promocaoProduto.toFixed(2)
}

var btn = document.getElementById("btnPromocao")
btn.addEventListener('click', promocao)