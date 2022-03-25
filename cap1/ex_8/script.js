var num1 = Number(prompt("Digite o seu número ?"));
var num2 = Number(prompt("Digite o segundo número ?"));

somar(num1,num2);
function somar(num1, num2){
    let soma = num1 + num2;
    return alert("Soma do num1 + num2 = " + soma);
}