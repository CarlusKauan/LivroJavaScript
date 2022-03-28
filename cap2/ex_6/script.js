function calcular(){
    var inValorPorUso = document.getElementById("inValorPorUso")
    var inTempoPorUso = document.getElementById("inTempoPorUso")
    var outResposta = document.getElementById("outResposta")

    var valorporuso = Number(inValorPorUso.value)
    var tempoporuso = Number(inTempoPorUso.value)
    var tempoporusototal = Math.ceil(tempoporuso / 15)

    var valortotal = ( valorporuso * tempoporusototal ).toFixed(2)

    outResposta.textContent = "Valor a Pagar R$:" + valortotal
}

var btn = document.getElementById("btnCalcular")
btn.addEventListener('click', calcular)