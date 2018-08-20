let numero = 50;
let numsorteio = prompt("Arrisque um número");

while(numsorteio != numero){
    if(numsorteio > numero){
        console.log("MENOR");
    }else if(numsorteio < numero){
        console.log("MAIOR");
    }if(numsorteio = numero){
        console.log("Você acertou");
    }
}