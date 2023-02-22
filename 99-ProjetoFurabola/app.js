// 1 criar bola
// 2 furar bola
// 3 carregar o jogo totalizando a quantidade de bolas furadas

function criarBola(){
    var bola = document.createElement("div")
    bola.setAttribute("class","bola");

    var x = Math.floor(Math.random() * 700);
    var y = Math.floor(Math.random() * 500);

    bola.setAttribute("style","left:"+x+"px; top:"+y+"px;");
    bola.setAttribute("onclick","furar(this)");

    document.body.appendChild(bola);
}