var random = 0;
console.log(random)

var numero = 0;
var jogadas = 1;



function jogada(){
    numero = prompt(jogadas + " Restantes - Digite o numero que vai ser sorteado");
    checarResultado();
}

function checarResultado(){
    console.log(numero +"--"+random)
    if (numero == random){
        alert("Voce acertou, parabens")
        fimDeJogo();
    }else if (jogadas >= 4){
        alert("Voce Perdeu")
        fimDeJogo();
    }else{
        jogadas++;
        jogada();
    }
}

function fimDeJogo(){
    jogadas = 1;
    random = Math.floor(Math.random()*10);
}