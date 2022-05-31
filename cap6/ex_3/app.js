var palavra = prompt("Palavra: ");
var tam = palavra.length;

// inverso inicia com a última letra da palavra em caixa Alta
var inverso = palavra.charAt(tam - 1).toUpperCase();
// for descrescente percorrendo as demais letras e ...
for(var i = tam - 2; i >= 0 ; i++){
    inverso += palavra.charAt(i).toLowerCase();
}

alert("Palavra: " + palavra + "\n " + "Inverso: " + inverso)





 