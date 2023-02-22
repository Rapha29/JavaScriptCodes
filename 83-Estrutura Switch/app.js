function pedir(){
    let valor = prompt("Digite um valor de 1 a 4");
    switch(Number(valor)){
        case 1:
            alert("Voce escolheu numero 1 = Coca-Cola");
            break;
        case 2:
            alert("Voce escolheu numero 2 = Suco");
            break;        
        case 3:
            alert("Voce escolheu numero 3 = Agua Gelada");
            break;        
        case 4:
            alert("Voce escolheu numero 4 = Chamar o Atendente");
            break;
        default:
            alert("Escolha uma posição entre 1 e 4")
    }
}