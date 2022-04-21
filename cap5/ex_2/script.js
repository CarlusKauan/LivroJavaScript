const $inNumero = document.getElementById('inNumero')
const $btnApostar = document.getElementById('btn')

var erros = [];

var sorteado = Math.floor(Math.random() * 10) + 1;

const CHANCES = 5;

const apostar = () => {
    var numero = Number($inNumero.value)

    if (numero > 10 || numero <= 0 || isNaN(numero)) {
        alert('Número Invalido')
        $inNumero = '';
        $inNumero.focus()
        return;
    }

    const $outDica = document.querySelector('.outDica')
    const $outErros = document.querySelector('.outErros')
    const $outChances = document.querySelector('.outChances')

    if (numero == sorteado) {
        $outDica.textContent = "Parabéns !! Número Sorteado: " + sorteado;
        alert('Parabéns')
        $btnApostar.disabled = true;
        $btJogar.className = "exibe"
        location.reload();
    } else {
        // se existe erros no vetor
        if (erros.indexOf(numero) >= 0) {
            alert('Você já apostou o número tente novamente !')
        } else {
            erros.push(numero)
            var numErros = erros.length
            var numChances = CHANCES - numErros
            $outErros.textContent = numErros + " (" + erros.join(", ") + ")";
            $outChances.textContent = numChances;

            if (numChances == 0) {
                $outDica.textContent = "Game Over !! Número Sorteado: " + sorteado;
                alert('Suas chances acabaram')
                $btnApostar.disabled = true;
                $BtJogar.className = "Exibe"
            } else {
                var dica = numero < sorteado ? "maior" : "menor";
                $outDica.textContent = "Tente um número " + dica + " que " + numero;
            }
        }
    }

    $inNumero.value = ''
    $inNumero.focus()
}

$btnApostar.addEventListener('click', apostar)