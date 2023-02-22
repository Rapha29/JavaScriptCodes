var nomes =[
    {nome: 'Carlos', ano: 2019},
    {nome: 'Maria', ano: 2020},
    {nome: 'José', ano: 2021},
    {nome: 'Lene', ano: 2022},
    {nome: 'Caique', ano: 2023},
    {nome: 'Mateus', ano: 2024},
];

nomes.forEach(function(element){
    var resultado = 'Nome: ' + element.nome + ', ano: ' + element.ano;
    console.log(element)
})