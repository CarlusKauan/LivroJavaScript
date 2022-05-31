
const $inFuncionario = document.getElementById('inFuncionario')
const $outEmail = document.getElementById('outEmail')
const $btGeral = document.getElementById('btGerar')

const Gerar = () => {
    let nome = $inFuncionario.value

    if(nome == "" || nome.indexOf(" ") == -1){
        alert('Nome invalido, digite o nome completo !')
        $inFuncionario.focus()
        return
    }
    console.log(nome)

    let partes = nome.split(" ");
    let email = "";
    let tam = partes.length;

    // percorre itens do vetor (exceto o ultimo)
    for(var i = 0; i < tam - 1; i++){
        email += partes[i].charAt(0);
    }

    // concatena as letras iniciais com a última parte
    email += partes[tam - 1] + "@empresa.com.br";

    // exibe e-mail
    $outEmail.textContent = "E-mail: " + email.toLowerCase();
};

$btGeral.addEventListener('click', Gerar)