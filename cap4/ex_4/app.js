// declarando de forma globalmente com contadores e acumuladores
var numeroContas = 0
var valorTotal = 0
// var string que acumula as contas
var resposta = ''

// ~ referênciando os components HTML
// entradas
const $inDescricao = document.getElementById('inDescricao')
const $inValor = document.getElementById('inValor')
const $btnRegistrar = document.getElementById('btnRegistrar')
// saídas
const $outListaContas = document.getElementById('outListaContas')
const $outTotal = document.getElementById('outTotal')

// função
function registrar(){
    let descricao = $inDescricao.value
    let valor = Number($inValor.value)

    if(descricao == "" || valor == 0 || isNaN(valor)){
        alert("Informe os dados corretamente...");
        $inDescricao.focus();
        return;
    }
    // adiciona os valores ao contador em inDescricao
    numeroContas++;
    valorTotal = valorTotal + valor;
    
    // concatena as contas
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    // altera o conteúdo das tags de resposta
    $outTotal.textContent = numeroContas + " Conta(s) - Total R$: " + valorTotal.toFixed(2);
    $outListaContas.textContent = resposta + "-----------------------";
    
    // limpa campos e posiciona cursos em inDescricao
    $inDescricao.value = '';
    $inValor.value = '';
    $inDescricao.focus();
}
// Adicionando Evento no botão, ao click executar função registrar()
$btnRegistrar.addEventListener('click', registrar)
