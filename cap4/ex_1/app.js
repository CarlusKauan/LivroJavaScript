// referência !
const $inNumero = document.getElementById('inNumero')
const $outResposta = document.getElementById('outNumero')
const $btnCalcular = document.getElementById('btnCalcular')

function calcular(){
    var numero = Number($inNumero.value)

    var resposta = ""

    if(numero == 0 || isNaN(numero)){
        alert("Informe um valor valido !")
        $outNumero.focus()
        return;
    }

    for(var i = 1; i <= 10; i++){
       var resposta  = resposta + numero + " x " + i + " = " + numero * i + "\n";
        // $outResposta.textContent = numero + " x " + i + " = " + numero * i + "\n";
    }

    $outResposta.textContent = resposta
}

$btnCalcular.addEventListener('click', calcular)

