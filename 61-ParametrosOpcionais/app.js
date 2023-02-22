
// Funções com paramentros


var n1 = 2;
var n2 = 2;
var n3 = 4;

// var resultado = (n1 + n2) *2/4;
// console.log(resultado);

function calcular(num1,num2,num3){
   if(num3 === undefined) num3 = 4  //validação do num3 pelo if
   return ((num1+num2) *2/num3)
}
console.log(calcular(n1,n2,n3))
console.log(calcular(2,2,4))