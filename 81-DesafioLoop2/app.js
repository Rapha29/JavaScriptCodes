// //----------------------------------
// // Desafio 1
let vezes = 4;

for ( let multiplicador = 1; multiplicador <= 10; multiplicador++){
    let resultado = vezes * multiplicador ;
    console.log(vezes + " vezes "+ multiplicador + " é igual a: " + resultado)
}


//----------------------------------
// Desafio 2
let valor = 3000;
let parcelas = 1;
let porcentagem = 0.02;
while (parcelas <= 5) {
    let resultado = valor * porcentagem * parcelas;
    console.log("no " +parcelas +"º mes o valor será de R$ "+resultado.toFixed(2))
    parcelas++
}


// //----------------------------------
// // Desafio 3
for(numero = 10; numero >= 0; numero--){
    console.log(numero)
}