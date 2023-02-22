//Armazenamento LocalStorage

localStorage.setItem("nome", "Carlos Uchoa");
localStorage.setItem("carrinho", ["Tenis Nike", "Calça Jeans da moda", "12"]);

console.log(localStorage.getItem("nome"));
console.log(localStorage.getItem("carrinho"));

localStorage.removeItem("nome");
localStorage.removeItem("carrinho");

localStorage.clear