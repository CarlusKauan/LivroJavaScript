function consumo() {
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outPreco = document.getElementById("outPreco");

    var quilo = Number(inQuilo.value)
    var consumo = Number(inConsumo.value)

    var valor = (quilo / 1000) * consumo;

    outPreco.textContent = "Valor a ser pago R$: " + valor.toFixed(2)
}

var btn = document.getElementById("btCalcular")
btn.addEventListener('click', consumo)