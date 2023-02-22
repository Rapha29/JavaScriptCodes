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

var nomes = ["Carlos", "Uchoa", "Leonardo", "Luiz","Joao"]
var numeros = [2,3,1,4,2]

////// Map e Filter ///////

let resultado = nomes.map(function(nome){
    return nome.toLocaleLowerCase();
})

console.log(resultado);

let resultado2 = numeros.map(function(valor){
    return valor +10;
})

console.log(resultado2);

resultado3 = numeros.filter(function(valor){
    return valor ==3 || valor ==2 || valor == 1
})

console.log(resultado3);
