var $btnClick = document.getElementById('btnClick');

const click = () => {
    
    var name = prompt("Qual o seu nome ?");

    while(true){ // criar Repetição;
    var continua = prompt(`Continuar (S/N) ${name} ? `); // lè um entrada;

    if(continua.toUpperCase() == "N"){ // converte em maiúscula;
        break; // sai da Repetição;
    }
}
};

$btnClick.addEventListener('click', click);