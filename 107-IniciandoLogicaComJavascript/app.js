//Função de invocação imediata
(function(){
    const quotes = [
{
    quote: "Na vida, não existe nada a temer, mas a entender.",
    author: "Marie Curie"
},{
    quote: "Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.",
    author: "Desconhecido"
},{
    quote: "A persistência realiza o impossível.",
    author: "Provérbio Chinês"
},{
    quote: "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.",
    author: "Desconhecido"
},{
    quote: "Seus sonhos não precisam de plateia, eles só precisam de você.",
    author: "Marie Curie"
},{
    quote: "A persistência é o caminho do êxito.",
    author: "Charles Chaplin"
},{
    quote: "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
    author: "Zig Ziglar"
},{
    quote: "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    author: "Dalai Lama"
},{
    quote: "No meio da dificuldade encontra-se a oportunidade.",
    author: "Albert Einstein"
},{
    quote: "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
    author: "Charlie Brown Jr"
},{
    quote: "A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.",
    author: "Frederick Herzberg"
},{
    quote: "É parte da cura o desejo de ser curado.",
    author: "Sêneca"
},{
    quote: "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    author: "Roberto Shinyashiki"
},{
    quote: "Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.",
    author: "Paulo Coelho"
},{
    quote: "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    author: "Eleanor Roosevelt"
}
];
const btn = document.getElementById("generate-btn")
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length)
    document.getElementById('quote').textContent = quotes[random].quote;
    document.querySelector('.author').textContent = quotes[random].author;
})
})()