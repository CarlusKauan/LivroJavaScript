alert("Digite 0 para sair")
// inicio da repetição
do{
    var num = prompt("Digite um número: ")

    if(num == 0 || isNaN(num)){
        var sair = confirm("Confirma saída?") // solicita confirmação
        if(sair) {
            break;
        }
        else{
            continue;
        }
    }
    // se par, mostra o dobro; impar, mostrar o triplo
    if(num % 2 == 0){
        alert("O dobro de " + num + "é " + num * 2)
    }
    else{
        alert("O Triplo de " + num + "é " + num * 3)
    }
}
while(true)

alert("Bye, Bye....")

