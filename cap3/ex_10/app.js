const $inLadoA = document.getElementById('inLadoA')
const $inLadoB = document.getElementById('inLadoB')
const $inLadoC = document.getElementById('inLadoC')
const $outResposta = document.getElementById('outResposta')
const $outTipo = document.getElementById('outTipo')

function verificarLados(){
    let ladoA = Number($inLadoA.value)
    let ladoB = Number($inLadoB.value)
    let ladoC = Number($inLadoC.value)
    let ladoSoma = ladoB + ladoC;

    if(ladoA < ladoSoma){
        $outResposta.textContent = 'Lados podem formar um triângulo'
    }

    if(ladoA == ladoB && ladoA == ladoC){
        $outTipo.textContent = 'Equilátero'
    }
    else if( ladoB == ladoC){
        $outTipo.textContent = 'Isósceles'
    }
    else{
        $outTipo.textContent = 'Escaleno'
    }
}

const $btnVerificar = document.getElementById('btnVerificar')
$btnVerificar.addEventListener('click', verificarLados)