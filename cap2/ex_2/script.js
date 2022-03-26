function converter() {

    // referenciando os inputs
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");

    // atribuir o 'valor' dos inputs em uma outra variavel, duracao convertido para Number()
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    // processo de 'conversão', Math.floor 'faz o arrendondamento para baixo.'
    var horas = Math.floor(duracao / 60);
    // minutos vai ser o resto da divisão de 'duracao / 60' = x 
    var minutos = duracao % 60;

    // saída
    var outTitulo = document.getElementById("outTitulo").textContent = titulo;
    var outDuracao = document.getElementById("outDuracao").textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}

// cria uma referencia ao botão 
var conversao = document.getElementById("btnConverter");
// addEventListener, fica ouvindo o click, esperando para acionar a função converter();
conversao.addEventListener('click', converter);