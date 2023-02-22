//capturar elementos dentro da div app
let elementoInput = document.querySelector('#app input');
let elementoButton = document.querySelector('#app button');
let elementoUl = document.querySelector('#app ul');

let listas = [
    'Vou pagar conta na loterica', 
    'Estudar JS', 
    'Estudar DOM'
];

function mostrarListas(){
    elementoUl.innerHTML ='';
    for(lista of listas){
        //console.log(lista)
        let elementoLista = document.createElement('li');
        var textoLista = document.createTextNode(lista);

        elementoLista.appendChild(textoLista);
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
}}

elementoButton.onclick = adicionarLista;