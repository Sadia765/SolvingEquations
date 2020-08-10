console.log('script loaded');

window.onload = function(){
    const buttonAdd = document.getElementById('addButton');
    buttonAdd.addEventListener('click', add);
}

function add(){
    const answerDiv = document.getElementById('addAnswer');
    const inputForA = parseInt(document.getElementById('aInput').value);
    const inputForB = parseInt(document.getElementById('bInput').value);
    const inputForC = parseInt(document.getElementById('cInput').value);
    const total = inputForA + inputForB + inputForC;
    answerDiv.innerHTML= total;
}

