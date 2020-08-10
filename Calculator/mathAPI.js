console.log('script loaded');

window.onload = function(){
    const buttonExternalAPI = document.getElementById('hardCodedMathExternalAPI');
    buttonExternalAPI.addEventListener('click', linkToAPI);
}

function linkToAPI(e){
    console.log(e);
    console.log('go to external API now!');
    const externalAPIAnswer = document.getElementById('hardCodedmathAPIAnswer');
    fetch('http://api.mathjs.org/v4/?expr=2*(7-3)')
    .then((response) => {
       return response.json();
    })
    .then((responseConverted) => {
      console.log(responseConverted);
      externalAPIAnswer.innerHTML = responseConverted;  
    })
}