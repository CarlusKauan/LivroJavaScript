const $inPaciente = document.querySelector('#inPaciente')

const $btAdicionar = document.querySelector('#btAdicionar')
const $btUrgencia = document.querySelector('#btUrgencia')
const $btAtender = document.querySelector('#btAtender')

const $outAtendimento = document.querySelector('#outAtendimento')
const $outLista = document.querySelector('#outLista')

var pacientes = new Array()

const adicionar = () => {
    // pegando value
    let nome = $inPaciente.value;

    // validação
    if(nome == ''){
        alert('Invalido !')
        $inPaciente.focus()
        return;
    }

    pacientes.push(nome)

    let lista = ''

    // percorre o array
    for(var i=0; i<pacientes.length; i++){
        lista += (i + 1) + '. ' + pacientes[i] + '\n';
    }

    $outLista.textContent = lista

    $inPaciente = ''
    $inPaciente.focus()
}

$btAdicionar.addEventListener('click', adicionar)


const Urgencia = () => {
    // pegando value
    let nome = $inPaciente.value;

    // validação
    if(nome == ''){
        alert('Invalido !')
        $inPaciente.focus()
        return;
    }

    pacientes.unshift(nome)

    let lista = ''

    // percorre o array
    for(var i=0; i<pacientes.length; i++){
        lista += (i + 1) + '. ' + pacientes[i] + '\n';
    }

    $outLista.textContent = lista

    $inPaciente = ''
    $inPaciente.focus()
}

$btUrgencia.addEventListener('click', Urgencia)


const atender = () => {
    if(pacientes.length == 0){
        alert('Não existe pacientes')
        $inPaciente.focus()
        return;
    }

    let atender = pacientes.shift()

    $outAtendimento.textContent = atender;

    var lista = ''

    for(var i=0; i < pacientes.length; i++){
        lista += ( i + 1 ) + '. ' + pacientes[i] + '\n'  
    }

    $outLista.textContent = lista
}

$btAtender.addEventListener('click', atender)

