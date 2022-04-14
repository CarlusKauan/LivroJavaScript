const $inNumero = document.getElementById('inNumero')
const $btnMsg = document.getElementById('btnMsg')
const $outNumero = document.getElementById('outNumero')

// const msg = prompt("Name ?")
// const $outName = document.querySelector('.outName')

var numDivisores = 0

const mensage = () => {
    let numero = Number($inNumero.value)

    for(var i = 1; i < numero; i++){
        if(numero % i == 0){
            numDivisores++
        }
    }

    if(numDivisores == 2){
        $outNumero.textContent = `${numero} é primo`
    }
    else{
        $outNumero.textContent = ` ${numero} Não é primo`
    }
}

$btnMsg.addEventListener('click', mensage)