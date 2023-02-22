function validadorform(){

    var campoNome = document.getElementById('nome');
    var campoSobrenome = document.getElementById('sobrenome');
    var Msg = document.getElementById('Msg');

    // console.log (campoNome, campoSobrenome, Msg);
    campoNome.style.border = "";
    campoSobrenome.style.border = "";
    Msg.innerHTML = "";
    Msg.style.display = "none";

    if(campoNome.value == ""){ // Erro sem nome
        Msg.classList.add(style ='alert-danger')
        Msg.innerHTML = "Preencha o Nome <br>";
        Msg.style.display = "block";
        campoNome.style.border = "2px solid red";
    }
    if(sobrenome.value == ""){ // Erro sem sobrenome
        Msg.classList.add(style ='alert-danger')
        Msg.innerHTML += "Preencha o Sobrenome";
        Msg.style.display = "block";
        campoSobrenome.style.border = "2px solid red";
    }
    if(campoNome.value != "" && campoSobrenome.value != ""){ //Validado com Sucesso
        Msg.classList.remove(style ='alert-danger')
        Msg.innerHTML = "";
        Msg.style.display = "none";
        Msg.innerHTML = "Eviado com sucesso";
        Msg.classList.add(style ='alert-success')
        Msg.style.display = "block";
        campoNome.value = "";
        campoSobrenome.value = "";
    }
}