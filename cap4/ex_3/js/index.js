alert("Digite o número 0 para sair")
// inicio da loop
do{
    var num = prompt("Digite um número: ")
    if(num == 0 || isNaN(num)){
        var sair = confirm("Você que sair")
        if(sair){
            break;
        }
        else{
            continue;
        }
    }
    if(num % 2 == 0){
        alert("O dobro de " + num + " é: " + num * 2)
    }
    else{
        alert("O Triplo de " + num + " é: " + num * 3)
    }
}
while(true)

alert("Bye, Bye ...")