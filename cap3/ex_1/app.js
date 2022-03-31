const inNome = document.getElementById("inNome")
const inNota = document.getElementById("inNota")
const inNota2 = document.getElementById("inNota2")

// OUTPUT
const outMedia = document.getElementById("outMedia")
const outMensagem = document.getElementById("outMensagem")

function i(){
    let nota = Number(inNota.value)
    let nota2 = Number(inNota2.value)
    let media = ( nota + nota2 ) / 2

    if(media > 5){
        outMedia.textContent = "Sua média: " + media
        outMensagem.textContent = "Parabens, você foi aprovado !"
    }
    else{
        outMedia.textContent = "Sua média: " + media
        outMensagem.textContent = "Putz, você foi reprovado !"
    }

}

var btn = document.getElementById("btnCalcular")
btn.addEventListener('click', i)

