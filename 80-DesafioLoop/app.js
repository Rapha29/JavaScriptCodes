// - 1
for(a = 0; a < 10; a++){
    console.log(a)
}

// - 2
var z = 0
while(z < 5){
    console.log(z)
    z++
}

// - 3

let valorProduto = 500;

for ( let contador = 1; contador <= 5; contador++){
    let valorParcela = valorProduto / contador ;
    console.log("Numero de parcelas: " + contador + " - Valor da parcela: R$"+ valorParcela.toFixed(2))
}