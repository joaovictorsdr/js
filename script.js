//Guardar o nome na variavel e exibir//
//let nome = prompt("Digite aqui seu nome");
//console.log(`O nome digitado foi ${nome} `);
//alert(`Seja bem vindo, ${nome}! Aproveite sua visita!`);

let numero = ("Digite aqui um número");

if(isNaN(Number(numero)) || numero === null){
    console.log("Valor inválido");
}
else if(numero > 10){
    console.log("Não é um número maior que 10");
}
else if(numero < 10){
    console.log("É um número menor que 10");
}
else{
    console.log("É o número 10!");
}



//Condições//
if(6 < 7){
    console.log("kajdkfjadskfj");
}


//exemplo de WHILE
let limite  = Number(prompt("Digite o limite do contador"));
let contador =1;

while(contador <= limite){ //condição
    contador.log(contador);

    //atualização do contador
    contador = contador +1;
}
























