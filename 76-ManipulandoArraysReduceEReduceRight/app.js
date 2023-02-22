

var numeros = [2,3,1,4,2]


//  
// soma todos os elementos
var resultReduce = numeros.reduce(function(previousValue, currentValue,currentIndex, numeros){
    return previousValue + currentValue;
});

console.log(resultReduce);


// soma todos os elementos ao contrario
var resultReduceRight = numeros.reduceRight(function(previousValue, currentValue,currentIndex, numeros){
    return previousValue + currentValue;
});

console.log(resultReduceRight);