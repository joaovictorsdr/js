let idade = prompt("Digite sua idade?");
let renda = prompt("Qual sua renda?");
let valoremp = prompt("Qaul o valor do empréstimo?")

if(idade >= 21 && idade <= 60 && (renda >= 1500) && (valoremp >= 1000) && (valoremp <=renda * 20)) {
    console.log("empréstimo aprovado");
}else{
    console.log("empréstimo não aprovado");
}

let numero = 50;
let numsorteio = prompt(("Arrisque um número"));

if(numsorteio < numero ){
    console.log("MAIOR");
}else if(numsorteio > numero){
    console.log("MENOR");
}else if(numsorteio = numero){
    console.log("Você acertou");
}








