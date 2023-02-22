function alterarFontSize(size){
    return function(){
        document.body.style.fontSize = size + 'px'
    }
}

var size12 = alterarFontSize(12);
var size14 = alterarFontSize(14);
var size16 = alterarFontSize(16);

document.getElementById('size-12').onclick = size12
document.getElementById('size-14').onclick = size14
document.getElementById('size-16').onclick = size16

