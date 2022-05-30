const $inNome = document.getElementById("inNome");
const $outCracha = document.getElementById("outCracha")
const $btGerar = document.getElementById("btGerar");

const Gerar = () => {
    let nome = $inNome.value
    console.log(nome)

    if(nome == " "){
        alert("Nome invalido !")
        $inNome.focus()
        return;
    }

    var priEspaco = nome.indexOf(" ");
    var ultEspaco = nome.lastIndexOf(" ");

    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    $outCracha.textContent = "Crachá: " + cracha
};  


$btGerar.addEventListener('click', Gerar)
