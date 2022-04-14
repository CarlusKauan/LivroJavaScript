const $inNumero = document.getElementById("inNumero")
const $btn = document.getElementById('btn')
const $outEstrelas = document.getElementById('outEstrelas')

function preencher(){
    var num = $inNumero.value;
    console.log(num)

    if(num == 0 || isNaN(num)){
        alert("Informe um valor valido no momento !");
        $inNumero.focus();
        return;
    }

    var estrelas = "";

    for(var i = 1 ; i <= num ; i++){
        if(i % 2 == 1){
            estrelas += "*";
        }
        else{
            estrelas += "-";
        }
    }

    $outEstrelas.textContent = estrelas;
}

$btn.addEventListener('click', preencher);