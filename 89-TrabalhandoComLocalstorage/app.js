// //Armazenamento LocalStorage

// localStorage.setItem("nome", "Carlos Uchoa");
// localStorage.setItem("carrinho", ["Tenis Nike", "Calça Jeans da moda", "12"]);

// console.log(localStorage.getItem("nome"));
// console.log(localStorage.getItem("carrinho"));

// localStorage.removeItem("nome");
// localStorage.removeItem("carrinho");

// localStorage.clear

//JSON.stringify
// localStorage.setItem('Usuario',JSON.stringify({nome: 'Carlos', idade: 18}));
// var usuario = JSON.parse(localStorage.getItem("Usuario"));
// console.log(typeof usuario);
// console.log(usuario.nome);
// console.log(usuario.idade);


// sessionStorage.setItem("nome", "Carlos Uchoa")
// console.log(sessionStorage.getItem("nome"))

// sessionStorage.setItem('Usuario', JSON.stringify({nome: 'Carlos' , idade: 38}));
// var usuario = JSON.parse(sessionStorage.getItem("Usuario"));
// console.log(typeof usuario);
// console.log(usuario.nome);
// console.log(usuario.idade);


if(localStorage.hasOwnProperty("Usuario")){
    var nome = localStorage.getItem("Usuario")
    alert("Olá "+ nome+ "!!!")
}else{
    var nome = prompt("Qual seu nome")
    localStorage.setItem("Usuario" , nome)
}
