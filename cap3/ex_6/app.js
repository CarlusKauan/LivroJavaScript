const $inSaque = document.getElementById('inSaque')
const $outCem = document.getElementById('outCem')
const $outCiquenta = document.getElementById('outCinquenta')
const $outDez = document.getElementById('outDez')
const $outMoeda = document.getElementById('outMoedaUm')
const btExibir = document.getElementById('btExibir')
const btLimpar = document.getElementById('btLimpar')

function saque(){

    $outCem.textContext = ""
    $outCiquenta.textContent = ""
    $outDez.textContext = ""
    $outMoeda.textContext = ""
    
    let saque = Number($inSaque.value)

    let notasCem = Math.floor(saque / 100)
    let resto = saque % 100;
    let notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50;
    let notasDez = Math.floor(resto / 10)
    resto = resto % 10;
    let moeda = resto;

    if(notasCem > 0){
        $outCem.textContent = "Notas de R$100: " + notasCem
    }
    if(notasCinquenta > 0){
        $outCiquenta.textContent = "Notas de R$50: " + notasCinquenta
    }
    if(notasDez > 0){
        $outDez.textContent = "Notas de R$10: " + notasDez
    }
    if(moeda > 0){
        $outMoeda.textContent = "Moedas de R$1.00: " + moeda
    }
}

btExibir.addEventListener('click', saque)

function limpar(){
    location.reload()
    $inSaque.focus()
}

btLimpar.addEventListener('click', limpar)