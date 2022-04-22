const $inModelo = document.getElementById('inModelo')
const $inPreco = document.getElementById('inPreco')
const $outLista = document.getElementById('outLista')

// carros
var carros = [];

const adicionarCarros = () => {
    var nome = $inModelo.value
    var preco = Number($inPreco.value)

    if(nome == '' || preco == 0 || isNaN(preco)){
        alert('Informe corretamente os dados !')
        $inModelo.focus()
        return;
    }

    carros.push({ nome: nome, preco: preco })

    limparCampos();

    listarCarros();
}

$btnAdicionar = document.getElementById('btnAdicionar')

$btnAdicionar.addEventListener('click', adicionarCarros)

const listarCarros = () => {
    if(carros.length == 0){
        alert('Não Existe nenhum carro !')
        return;
    }

    var lista = ''

    for(var i = 0 ; i < carros.length ; i++){
        lista += carros[i].nome + ' - R$: ' + carros[i].preco.toFixed(2) + '\n';
    }

    $outLista.textContent = lista;
}

$btnListar = document.getElementById('btnListar')
$btnListar.addEventListener('click', listarCarros)


const filtrarCarros = () => {

    var maximo = Number(prompt('Digite o valor máximo?'));

    if(maximo == 0 || isNaN(maximo)){
        alert('Número Invalido !')
        return;
    }

    var lista = "";
    var hiffen = '-'

    for(var i = 0; i < carros.lenght; i++){
        // validação
        if(carros[i].preco <= maximo){
            lista += carros[i].nome + ' - R$: ' + (carros[i].preco).toFixed(2) + '\n';
        }
    }

    if(lista == ""){
        $outLista.textContent = 'Não há carros com preço até R$: '+ maximo.toFixed(2)
    } else {
        $outLista.textContent = 'Carros até R$: ' + maximo.toFixed(2) + '\n' + hiffen.repeat(15) + '\n' + lista;
    }
}

$btnFiltrar = document.getElementById('btnFiltrar')
$btnFiltrar.addEventListener('click', filtrarCarros)



const limparCampos = () => {
    $inModelo.value = ''
    $inPreco.value = ''
    $inModelo.focus()
    return;
}