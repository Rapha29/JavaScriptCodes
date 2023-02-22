var random = Math.floor(Math.random()*10);
console.log(random)

var numero = 0;
var jogadas = 1;

jogada()

function jogada(){
    numero = prompt("Digite o numero que vai ser sorteado");
    checarResultado();
}

function checarResultado(){
    if (numero == random){
        alert("Voce acertou, parabens")
    }else if (jogadas <= 0){
        alert("Voce Perdeu")
    }else{
        jogadas--;
        jogada();
    }
}