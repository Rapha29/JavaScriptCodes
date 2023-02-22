function textoConsoleLog(){
    console.log("Testando evento Onclick");
}

document.getElementById("btn1").onclick = textoConsoleLog

document.getElementById("btn2").onmouseover = textoConsoleLog

document.getElementById("input1").onkeyup = function(){
    console.log("Teclas Precionadas")
}
