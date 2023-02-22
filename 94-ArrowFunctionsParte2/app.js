// // console.log("arrow")
// // ES5
// var nomeMinusculo = function(nome){
//     return nome.toLocaleLowerCase()
// }
// console.log(nomeMinusculo("CARLOS"))

// //ES¨
// //ArrowFunctions
// let nomeMinusculoEs6 = nome => nome.toLocaleLowerCase()

// // console.log(nomeMinusculoEs6("UCHOA"))

let nomeCompleto = (nome, sobrenome) => {
    nome = nome.toUpperCase()
    sobrenome = sobrenome.toUpperCase()

    let nCompleto = nome + " " + sobrenome
    return nCompleto
}
console.log(nomeCompleto("carlito" , "tevez"))