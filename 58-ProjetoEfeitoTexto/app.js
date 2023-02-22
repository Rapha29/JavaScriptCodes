const textEl = document.getElementById("text");
const SpeedEl = document.getElementById("speed");
const text = "Wanessa Maia, eu te amo muito!";
let idx = 1;
let speed = 300 / SpeedEl.value;

EscrevendoTexto();
function EscrevendoTexto(){
    textEl.innerText = text.slice(0,idx);
    idx++
    if(idx > text.length){
        idx = 1
    }
    setTimeout(EscrevendoTexto, speed)
}

SpeedEl.addEventListener('input', function(e){
    speed = 300 / e.target.value; 
})