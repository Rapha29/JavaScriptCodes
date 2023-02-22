// // 0.1.2.3.4....
// console.log(names);
// console.log(names.length);
// console.log(names[3]);

// para alterar no array = nome do array [posição] = ????

// lista[2] = "Alterar elemento da posição"
// lista.push("Willian") //inclui no fim do array
// lista.unshift() // adiciona primeiro item da lista
// lista.shift() // remove primeiro item da lista
// lista.indexOf("Maria") // procura elemento da lista
// lista.pop() // remove o ultimo da lista
// lista.join("/") // altera o tipo de separação

// console.log(names);
// console.log(numbers);

// console.log(numbers.join("-"));

// console.log(numbers.reverse());
// console.log(names.reverse());

// console.log(numbers.sort()); //coloca na ordem

//////////////////////////////////////////////

var nomes = ["Carlos", "Uchoa", 20, true, 20.0]
var numeros = [2,3,1,4,2]

console.log(nomes.indexOf("Carlos"));
console.log(numeros.indexOf(2)); //procura do inicio para o fim
console.log(numeros.lastIndexOf(2)); //procura do fim para o inicio

var number = 4
var resultado = numeros.findIndex(function(n){
    return n == number;
})

console.log(nomes.concat(numeros)); // une os arrays
console.log(numeros.slice(0,4)) // percorre posiçoes do elemento por meio de parametros
console.log(numeros.slice(1,numeros.length)) // percorre posiçoes do elemento por meio de parametros

console.log(typeof numeros.toString()) //converte array em String

