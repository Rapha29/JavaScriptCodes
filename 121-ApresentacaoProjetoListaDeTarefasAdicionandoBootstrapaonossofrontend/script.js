//capturar elementos dentro da div app
let elementoInput = document.querySelector('#app input');
let elementoButton = document.querySelector('#app button');
let elementoUl = document.querySelector('#app ul');

let listas = JSON.parse(localStorage.getItem('listaTarefas')) || [];

// let listas = [
//     'Vou pagar conta na loterica', 
//     'Estudar JS', 
//     'Estudar DOM'
// ];

function mostrarListas(){
    elementoUl.innerHTML ='';
    for(lista of listas){
        //console.log(lista)
        let elementoLista = document.createElement('li');
        var textoLista = document.createTextNode(lista);
        let elementoLink = document.createElement('a');
        let posicao = listas.indexOf(lista);
        elementoLink.setAttribute('onclick','deletarLista('+posicao+')')
        elementoLink.setAttribute('href', '#');
        let textolink = document.createTextNode(' Excluir');
        elementoLink.appendChild(textolink);


        elementoLista.appendChild(textoLista);
        elementoLista.appendChild(elementoLink)
        elementoUl.appendChild(elementoLista);
    }
}

mostrarListas()

function adicionarLista(){
    if (elementoInput.value === ""){
        alert ('Digite algo')
    }else{
    let textoLista = elementoInput.value;
    listas.push(textoLista);
    mostrarListas();
    elementoInput.value = '';
    salvarLista()
}}

elementoButton.onclick = adicionarLista;

function deletarLista(posicao){
    //splice remove algo da lista sempre passando a posição do elemento no array
    listas.splice(posicao, 1);
    mostrarListas()
    salvarLista()
}

function salvarLista(){
    localStorage.setItem('listaTarefas',JSON.stringify(listas));
}