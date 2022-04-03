const $inNumero = document.getElementById("inNumero")
const $outNumero = document.getElementById("outNumero")

function verificar(){
    
    let numero = Number($inNumero)
    
    if(numero % 2 == 0){
        $outNumero.textContext = numero + " é Par"
    }
    else{
        $outNumero.textContext = numero + " é Impar"
    }
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener('click', verificar)