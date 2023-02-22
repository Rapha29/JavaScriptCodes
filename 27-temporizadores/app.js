// setInterval

// function acaoTexto(){
//     document.write("Testando a função setInterval... <br/>")
// }

// setInterval(acaoTexto,1000); //executa acaotexto a cada segundo
var timer = setInterval(function(){
    document.write("Testando a função setInterval... <br/>")
},1000)         // Para parar digite: clear interval(timer) no console

// setTimeout

setTimeout("clearInterval(timer)",10000);