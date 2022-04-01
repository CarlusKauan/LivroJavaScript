const outResposta = document.getElementById("outResposta")
const inNumero = document.getElementById("inNumero")

function calcularRaiz(){

    let numero = Number(inNumero.value)

    if(numero == 0 || isNaN(numero)){
        alert("Informe um número valido !")
        inNumero.focus();
        return;
    }

    let raiz = Math.sqrt(numero)

    if(raiz % 1 == 0 ){
        outResposta.textContent = "Raiz: " + raiz;
    }
    else{
        outResposta.textContent = "Não ha raiz exata para " + numero;
    }
}

var btExibir = document.getElementById("btExibir")
btExibir.addEventListener('click', calcularRaiz)