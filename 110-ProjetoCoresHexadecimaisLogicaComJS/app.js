//Podem ser codificada por numeros hexadecimais como: FFAA00- 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f.
(function(){
    const button = document.querySelector('#btn');
    const body = document.querySelector('body');
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    const valor = document.querySelector('#valor-hexadecimal');
    button.addEventListener('click', changeHex)
    function changeHex(){
        let hex = "#"
        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
    
        valor.textContent = hex;
        body.style.backgroundColor = hex;
    }
})()
