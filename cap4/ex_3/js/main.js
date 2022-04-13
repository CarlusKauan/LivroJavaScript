alert("Digite 0 para sair")
do{
    var num = prompt("Digite um número: ")
    if(num == 0 || isNaN(num)){
        var sair = confirm('Deseja Sair ?')
        if(sair){
            break;
        }
        else{
            continue;
        }
    }

    if(num % 2 == 0){
        alert('O dobro de ' + num + ' é ' + num * 2)
    }
    else{
        alert('O Triplo de ' + num + ' é ' + num * 3)
    }
    
}
while(true)

alert('sayonara')