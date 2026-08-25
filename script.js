let preco = 150 

if (preco > 100) {
    let desconto = preco * 0.10;
    let precoFinal = preco - desconto;
    console.log("Preço final com desconto: " + precoFinal);
}

let numero1 = 15;
let numero2 = 1;

if (numero1 > numero2) {
    console.log(numero1 + " é maior que " + numero2);
} else if (numero1 < numero2) {
    console.log(numero2 + " é maior que " + numero1);
} else {
    console.log("Os números são iguais");
}

let nota = 8.5;

if (nota >= 9){
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else {
    console.log("Precisa melhorar");
}
