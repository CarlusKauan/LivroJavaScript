// Declaração global das variáveis
const $inName = document.querySelector("#inNome");
const $inAltura = document.querySelector("#inAltura");
const $inMasc = document.querySelector("#inMasc");
const $inFem = document.querySelector("#inFem");
var $outResposta = document.querySelector(".outResposta");


function calcular() {
    let nome = $inName.value;
    let altura = Number($inAltura.value);
    let masculino = $inMasc.checked;
    let feminino = $inFem.checked;

    if (nome == "" || ( masculino == false && feminino == 2)){
        alert("Por favor informe o nome eo sexo");
        $inName.focus();
        return;
    }

    if (altura == 0 || isNaN(altura)) {
        alert("Informe a sua altura !");
        $inAltura.focus();
        return;
    }

    if (masculino) {
        var peso = 22 * Math.pow(altura, 2)
    } else {
        var peso = 21 * Math.pow(altura, 2)
    }
    
    // var peso;
    //  var sexo = masculino ? peso = 22 * Math.pow(altura, 2) : peso = 21 * Math.pow(altura, 2)
    $outResposta.textContent = nome + ": Seu peso ideal é: " + peso.toFixed(2) + " Kg";

}

const btn = document.getElementById("Calcular");
btn.addEventListener('click', calcular);


function limparCampos() {
    location.reload();
    document.getElementById($inName).focus();
}

const btnLimpar = document.getElementById("Limpar");
btnLimpar.addEventListener('click', limparCampos)