// //manipulando o BOM
// let versao =navigator.userAgent
// let versao2 =navigator.appVersion
// console.log(versao)
// console.log(versao2)

// let teste = screen.width;
// console.log(teste)
// let laguraTela = screen.height;
// console.log(laguraTela)
// //manipulando o DOM

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(MinhaPosicao);
}else{
    document.getElementById("BOM_DOM").innerHTML = 
    "Geolocalização não é suportado por esse browser"
}

function MinhaPosicao(posicao){
    document.getElementById("BOM_DOM").innerHTML =
    "Latitute " + posicao.coords.latitude + "<br>" +
    "Longitude " + posicao.coords.longitude;
}