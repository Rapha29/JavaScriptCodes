function validadorform(){

    var campoNome = document.getElementById('nome');
    var campoSobrenome = document.getElementById('sobrenome');
    var MsgErro = document.getElementById('MsgErro');
    var MsgSucesso = document.getElementById('MsgSucesso');

    // console.log (campoNome, campoSobrenome, MsgErro, MsgSucesso);
    campoNome.style.border = "";
    campoSobrenome.style.border = "";
    MsgErro.innerHTML = "";
    MsgErro.style.display = "none";
    MsgSucesso.style.border = "none";

    if(campoNome.value == ""){ // Erro sem nome
        MsgErro.innerHTML = "Preencha o Nome <br>";
        MsgErro.style.display = "block";
        campoNome.style.border = "2px solid red";
    }
    if(sobrenome.value == ""){ // Erro sem sobrenome
        MsgErro.innerHTML += "Preencha o Sobrenome";
        MsgErro.style.display = "block";
        campoSobrenome.style.border = "2px solid red";
    }
    if(campoNome.value != "" && campoSobrenome.value != ""){ //Validado com Sucesso
        MsgErro.innerHTML = "";
        MsgErro.style.display = "none";
        MsgSucesso.innerHTML = "Eviado com sucesso";
        MsgSucesso.style.display = "block";
        campoNome.value = "";
        campoSobrenome.value = "";
    }
}