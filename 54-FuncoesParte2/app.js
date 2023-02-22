//Funções são como receita pronta
// procedimento que deve ser seguido
var area = document.getElementById("area")
function entrar(){
    // alert("clicou")
    var nome = prompt("Digite seu nome!")
    //console.log(nome)
    if(nome === "" || nome === null){
        alert("Ops Algo deu errado");
        area.innerHTML ="Clique em acessar e tente de novo!"
    }else{
        area.innerHTML = "Bom dia, " + nome;

        let botaoSair = document.createElement('button');
        botaoSair.innerHTML = "Sair";
        botaoSair.onclick = sairSistema;

        area.appendChild(botaoSair);
    }
    
}

function sairSistema(){
    alert("Saindo do sistema, até logo")
    area.innerHTML = "Você se deslogou do sistema";
}