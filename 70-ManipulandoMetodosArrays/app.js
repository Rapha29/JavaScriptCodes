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

var times = ["São Paulo", "Palmeiras", "Flamengo", "Vasco"]
var lista = times.toString()
console.log(lista);

var lista = times.join("/")
console.log(lista);

var lista = times.push("Santos") // adiciona 1 elemento
console.log(times);

var lista = times.push("Curitiba","cruzeiro") // adiciona 2 elementos
console.log(times);

var lista = times.unshift("Chapecoense") // adiciona 1 elemento
console.log(times);

var lista = times.shift();
console.log(times);

var lista = times.pop();
console.log(times);

////////////////////////////////////////////
//CONCATENAR LISTAS

var meninos = ["José","Luiz","João"];
console.log(meninos);

var meninas = ["Isabel","Eduarda","Monica"];
console.log(meninas);

var criancas = [meninos.concat(meninas)]
console.log(criancas);













