// # declara função SalveMano
function salveMano() {
    // obtém o contéudo do campo com (id = nome)
    var nome = document.getElementById('nome').value;
    // exibe no parágrafo (resposta): "Iae" e o nome
    document.getElementById('resposta').textContent = 'Iae ' + nome;
}
// # Criando uma referencia ao button, com id
var Exibir = document.getElementById('exibir')
// registra no botão um ouvinte para o evento 'onclick'
// Ao ser clicado ele ira chamar a função 'salveMano()'
Exibir.addEventListener('click', salveMano) 

// Outro modo de realizar !
/*
    registra o botao com o id 'exibir'
var Exibir = document.getElementById('exibir')
    Ao ser clicado ele ira chamar a função 'salveMano'
Exibir.onclick = salveMano
*/