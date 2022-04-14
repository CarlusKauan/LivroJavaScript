// Referênciando 
const $inName = document.getElementById('inName')
const $inNumero = document.getElementById('inNumero')
const $btnRepetir = document.getElementById('btnRepetir')
const $outNome = document.getElementById('outNome')

// repetir
const repetir = () => {

    let nome = $inName.value
    let numero = Number($inNumero.value)

    if (numero == 0 || isNaN(numero)) {
        alert("Número Invalido, Digite um valor valido !")
        $inNumero.focus()
        return;
    }

    let frutaRepetida = ''
    let ultimaFruta = ''
    // Caindo no laço de repetição !
    for (var i = 1; i < numero; i++) {
        frutaRepetida += `${nome}*`
    }
    // Adicionando mais um nome !    
    ultimaFruta += `${nome}`

    $outNome.textContent = `${frutaRepetida}${ultimaFruta}`;
}

$btnRepetir.addEventListener('click', repetir)