const button = document.querySelector('button');
// console.log(button)
const body = document.querySelector('body');
const colors = ['red', 'green', 'blue','yellow','pink', 'purple'];


body.style.backgroundColor = 'violet'
button.addEventListener('click',changeBackGround);

function changeBackGround(){
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}