
// referenciando inputs
const inNome = document.getElementById("inNome");
const inPreco = document.getElementById("inPreco");
const outNome = document.getElementById("outNome");
const outPreco = document.getElementById("outPreco");
const btnCalcular = document.getElementById("btnCalcular");

// function exibir()
function exibir(){
    let nome = inNome.value
    let preco = inPreco.value
    outNome.textContent = "o seu nome é " + nome
    outPreco.textContent = "o preço é " + preco
}

// Evento 'addEventListener'
btnCalcular.addEventListener('click', exibir)