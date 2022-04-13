var $resposta = document.getElementById("resposta")
var bairro = prompt("Bairro de entrega? ")
var taxaEntrega;

switch (bairro) {
    case "Centro":
        taxaEntrega = 5.00;
        break;
    case "Fragata":
    case "Três Vendas":
        taxaEntrega = 7.00;
        break;
    case "Laranjal":
        taxaEntrega = 10.00;
        break;
    default: 
        taxaEntrega = 8.00;
}

alert("Taxa R$: " + taxaEntrega.toFixed(2))


// operador ternário, muito usado para abreviar condições
/*
    var categoria = idade >= 18 ? "Adulto" : "Juvenil";

    equivale ao mesmo que: 

    if(idade >= 18){
        "Adulto"
    }
    else{
        "Juvenil"
    }

*/