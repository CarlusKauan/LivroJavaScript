const $inValor = document.getElementById('inValor')
const $outTempo = document.getElementById('outTempo')
const $outTroco = document.getElementById('outTroco')

function confirmar(){

    let valor = Number($inValor.value).toFixed(2)
    // Troco
    let trocoDe30min = (valor - 1).toFixed(2);
    let trocoDe60min = (valor - 1.75).toFixed(2);
    let trocoDe120min = (valor - 3).toFixed(2);
    // validação        
    if (($inValor.value == '' || $inValor.value < 1) || isNaN(valor)) {
        alert('Digite um valor mínimo de R$1.00 !');
        $inValor.value = '';
        $inValor.focus();
        return;   
    }
    // Condição que faz a definição do tempo e o troco !
    if (valor >= 1 && valor < 1.75) {
        $outTempo.textContent = `Tempo: 30min`;
        $outTroco.textContent = `Troco: ${trocoDe30min}`;
    } else if (valor >= 1.75 && valor < 3) {
        $outTempo.textContent = `Tempo: 60min`;
        $outTroco.textContent = `Troco: ${trocoDe60min}`;
    } else {
        $outTempo.textContent = `Tempo: 120min`;
        $outTroco.textContent = `Troco: ${trocoDe120min}`;
    }
}

const btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', confirmar)



