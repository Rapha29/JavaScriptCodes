// Objetos em JS
// array = [];
var nomes = {
    nome: 'Carlos',
    sobreNome: 'Uchoa',
    // Quando uma função esta dentro de um objeto 
    // ela se torna metodo do mesmo
    nomeCompleto: function(){
        return nomes.nome + ' ' + nomes.sobreNome;
    },
    nomeCompleto2: function(separador){
        return nomes.nome + separador + nomes.sobreNome;
    },
};
console.log(nomes.nome)
console.log(nomes.sobreNome)
console.log(nomes.nomeCompleto())
console.log(nomes.nomeCompleto2(" / "))



