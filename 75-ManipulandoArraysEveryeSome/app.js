var nomes = ["Carlos", "Uchoa", "Leonardo", "Luiz","Joao"]
var numeros = [2,3,1,4,2]


// Every precisa que todos os 
// elementos estejam de acordo com a sentença
var resultEvery = numeros.every(function(valor){
    return valor >= 1;
});

console.log(resultEvery);

// Some aceita que um elemento esteja de acordo
var resultSome = numeros.some(function(valor){
    return valor >= 4;
});

console.log(resultSome);
