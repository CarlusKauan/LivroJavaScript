$inEspada = document.getElementById('inEspada')
$btnAdicionar = document.getElementById('btnAdicionar')
$outLista = document.getElementById('outLista')

var filmes = []

const adicionar = () => {
    
    let nome = $inEspada.value

    filmes.push( { nome: nome } )

    alert('Adicionado ' + nome)

    listar()
}

$btnAdicionar.addEventListener('click', adicionar)

const listar = () => {

    if(filmes.length == 0){
        alert('Não Existe filmes')
        $inEspada.focus()
        return;
    }

    var lista = ""

    for(var i=0; i<filmes.length; i++){
        lista += filmes[i].nome + '\n';
    }

    $outLista.textContent = lista
}