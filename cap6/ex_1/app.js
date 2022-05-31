var anuncio = prompt("Digite o anuncio? ")
var tam = anuncio.length
var numPalavras = 0

const $string = document.getElementById('string')

for(var i=0; i <= tam; i++){
    if(anuncio.charAt(i) == " "){
        numPalavras++;
    }
}

$string.textContent = "Anúncio: " + anuncio + "\n N°Palavras: " + tam + "\n N°Espaços: " + numPalavras