console.log('script loaded');

window.onload = function(){
    const buttonQuad = document.getElementById('mathExternalAPI');
    buttonQuad.addEventListener('click', linkToAPI);
}

function linkToAPI(e){
    console.log(e);
    console.log('go to external API now!');
    const externalAPIAnswer = document.getElementById('mathAPIAnswer');
    fetch('http://api.mathjs.org/v4/?expr=2*(7-3)')
    .then((response) => {
       return response.json();
    })
    .then((responseConverted) => {
      console.log(responseConverted);
      externalAPIAnswer.innerHTML = responseConverted;  
    })
}