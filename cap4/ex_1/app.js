// referência !
const $inNumero = document.getElementById('inNumero')
const $outResposta = document.getElementById('outNumero')
const $btnCalcular = document.getElementById('btnCalcular')

function calcular(){
    var numero = Number($inNumero.value)

    var resposta = ""

    for(var i = 1; i <= 10; i++){
       var resposta  = resposta + numero + " x " + i + " = " + numero * i + "\n";
        // $outResposta.textContent = numero + " x " + i + " = " + numero * i + "\n";
    }

    $outResposta.textContent = resposta
}

$btnCalcular.addEventListener('click', calcular)

