var preco = Number(prompt("Digite o valor do produto ?"));

var avista = preco - (preco * 0.10);
var parcelado = preco / 3;

alert("Preço R$ :" + preco.toFixed(2) 
    + "\nÀ vista R$: " + avista.toFixed(2) 
    + "\nOu 3x de R$: " + parcelado.toFixed(2))