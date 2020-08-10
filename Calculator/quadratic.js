console.log('script loaded');

window.onload = function(){
    const buttonQuad = document.getElementById('quadraticButton');
    buttonQuad.addEventListener('click', quadratic);
}

function quadratic(){
    const quadraticAnswerDiv = document.getElementById('quadraticAnswer');
    const a = document.getElementById('coefXSqrd').value;
    const b = document.getElementById('coefX').value;
    const c = document.getElementById('constant').value;
    //ax^2 + bx + c = 0
    //x = (-b + \sqrt(b^2 -(4*a*c)))/(2*a)
    //x = (-b - \sqrt(b^2 -(4*a*c)))/(2*a)
    
    console.log('Given: ', a,'x^2 + ', b, 'x + ', c, ' = 0');
    const discriminant = Math.pow(b,2) - (4*a*c);
    let discriminantStr;
    console.log(discriminant);
    if(discriminant < 0){
        discriminantStr = Math.abs(discriminant).toString();
        const x1 = '(' + (-b).toString() + ' + \sqrt(' + discriminantStr +')i)/' + (2*a);
        const x2 = '(' + (-b).toString() + ' - \sqrt(' + discriminantStr +')i)/' + (2*a);
        console.log(x1);
        console.log(x2);
        quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br> 
        Answer is imaginary because the discriminant, -b-4*a*c, is ${discriminant} 
        <br> The answer is x = ${x1} <br> or <br> x = ${x2}`;
    }
    else{
        discriminantStr = discriminant.toString();
        const x1 = '(' + (-b).toString() + ' + \sqrt(' + discriminantStr +'))/' + (2*a);
        const x2 = '(' + (-b).toString() + ' - \sqrt(' + discriminantStr +'))/' + (2*a);
        console.log(x1);
        console.log(x2);
        quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br>
        Answer is real because the discriminant, -b-4*a*c, is ${discriminant}
        <br> The answer is x = ${x1} <br> or <br> x = ${x2}`;
    }
    
    
}