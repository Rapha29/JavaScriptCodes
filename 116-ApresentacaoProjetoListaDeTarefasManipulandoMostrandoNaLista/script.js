//capturar elementos dentro da div app
let elementoInout = document.querySelector('#app input');
let elementoButton = document.querySelector('#app button');
let elementoUl = document.querySelector('#app ui');

let lista = [
    'Vou pagar conta na loterica', 
    'Estudar JS', 
    'Estudar DOM'
];

function mostrarListas(){
    for(lista of listas){
        //console.log(lista)
        let elementoLista = document.createElement('li');
        var textoLista = document.createTextNode(lista);

        elementoLista.appendChild(textoLista);
        elementoUl.appendChild(elementoLista);
    }
}

mostrarListas()