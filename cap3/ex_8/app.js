const $inVelocidade = document.getElementById("inVelocidade") 
const $inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor")
const $btnVerificar = document.getElementById("btnVerificar")
const $outSituacao = document.getElementById("outSituacao")


function verificar(){
    let velocidade = Number($inVelocidade.value)
    let velocidadeCondutor = Number($inVelocidadeCondutor.value)    

    if(velocidadeCondutor <= velocidade){
        $outSituacao.textContent = "Situação: Sem Multa"
    }
    else{
        $outSituacao.textContent = "Situação: Multa"   
    }

    console.log(velocidadeCondutor)
    console.log(velocidade)
}

$btnVerificar.addEventListener('click', verificar)