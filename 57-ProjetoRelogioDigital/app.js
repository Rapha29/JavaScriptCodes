setInterval(function(){

    let novaHora = new Date();
    //getHours trazer a hora
    //getMinutes traz os minutos
    //getSeconds tras os segundos
    
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    
    //chamamos a função zero para que ela retorne a concatenação com os minutos e segundos
    
    minuto = zero(minuto);
    segundo = zero(segundo);
    
    document.getElementById('relogio').textContent = hora+':'+minuto+':'+segundo;
    },1000)
    
    function zero(x){
        if(x < 10 ){
            x = '0' + x;
        } return x;
    }