function olaJS(){
    console.log("Funcionou o EventListener");
}

let button = document.querySelector("button");
// console.log(button)

// button.addEventListener("click", olaJS);
button.addEventListener("mouseover", olaJS);