// Referencias  !
const $inNumber = document.getElementById('inNumber')
const $btnCalcular = document.getElementById('btnCalcular')
const $outResposta = document.getElementById('outResposta')

function calcular() {
    // Recebendo valor de input    
    let numero = Number($inNumber.value)
    // Validação
    if(numero == 0 || isNaN(numero)){
        alert('informe um valor valido')
        $inNumber.focus()
        return;
    }
    // Criando um letiavel que vai formar o layout
    let resposta = "Entre "+ numero + " e 1: "
    // Laço que exibirá os números
    for (let i = numero; i > 0; i--) {
        // reposta vai acumulando números e vírgulas
        resposta = resposta + i + ", " + "\n";
    }
    //Saída
    $outResposta.textContent = resposta
}
// AddEventListener no botão !
$btnCalcular.addEventListener('click', calcular)