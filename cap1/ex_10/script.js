// ler duração de viagem
var duracaodias = Number(prompt("Digite a duração da sua viagem em dias ?"));
var duracaohoras = Number(prompt("Digite a duracão da sua viagem em horas ?"))

duracaoTotal()

function duracaoTotal(){
    // processo.
    var duracaoTotal = ( duracaodias * 24 ) + duracaohoras ;
    // sáida de dados. 
    alert("N° Dias: " + duracaodias + "\n" 
        + "N° Horas: " + duracaohoras + "\n" 
        + "Total de Horas: " + duracaoTotal);
}