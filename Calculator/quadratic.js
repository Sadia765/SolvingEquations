console.log('script loaded');

window.onload = function () {
    const buttonQuad = document.getElementById('quadraticButton');
    buttonQuad.addEventListener('click', quadratic);
}

function quadratic() {//Let's consider edge cases.
    const quadraticAnswerDiv = document.getElementById('quadraticAnswer');
    const a = parseInt(document.getElementById('coefXSqrd').value);
    const b = parseInt(document.getElementById('coefX').value);
    const c = parseInt(document.getElementById('constant').value);
    //ax^2 + bx + c = 0
    //x = (-b + \sqrt(b^2 -(4*a*c)))/(2*a)
    //x = (-b - \sqrt(b^2 -(4*a*c)))/(2*a)

    console.log(`Given: ${a}x^2 + ${b}x + ${c} = 0`);
    if (a === 0) {
        console.log('Input for a is 0, so we are not solving a quadratic!');
        quadraticAnswerDiv.innerHTML = `Input for a is 0, so we are not solving a quadratic!`;
    }
    else {//a is not zero, so we really are considering a quadratic equation!
        const discriminant = Math.pow(b, 2) - (4 * a * c);
        let discParity;
        let isBZero;
        let discrIsSquare;
        let x1;
        let x2;
        if (b === 0) {
            isBZero = true;
        }
        else {
            isBZero = false;
        }
        if (discriminant > 0) {
            discParity = 1;
        }
        else if (discriminant === 0) {
            discParity = 0;
        }
        else { //discriminant <0
            discParity = -1;
        }
        if (Math.sqrt(Math.abs(discriminant)) == Math.floor(Math.sqrt(Math.abs(discriminant)))) {
            discrIsSquare = true;
        }
        else {
            discrIsSquare = false;
        }
        if (discParity === 1) { //discriminant is positive
            if (discrIsSquare) {
                if (((Math.sqrt(discriminant) % (2 * a)) === 0) && ((b % (2 * a)) === 0)) {
                    x1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toString();
                    x2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toString();
                }
                else {//simplify Numerator
                    x1 = (-b + Math.sqrt(discriminant)).toString() + '/' + (2 * a).toString();
                    x2 = (-b - Math.sqrt(discriminant)).toString() + '/' + (2 * a).toString();
                }
            }
            else { //discrIsSquare === false
                if (isBZero) {//term only involves sqrt part of numberator and denominator.
                    x1 = '\sqrt(' + discriminant.toString() + ')/' + (2 * a).toString();
                    x2 = '-\sqrt(' + discriminant.toString() + ')/' + (2 * a).toString();
                }
                else {//discriminant is not a square and b is not zero, we don't simplify
                    x1 = '(' + (-b).toString() + '+\sqrt(' + discriminant.toString() + ') )/' + (2 * a).toString();
                    x2 = '(' + (-b).toString() + '-\sqrt(' + discriminant.toString() + ') )/' + (2 * a).toString();
                }
            }
        }
        else if (discParity === -1) { //discriminant is negative
            if (discrIsSquare) {
                if (((Math.sqrt(Math.abs(discriminant)) % (2 * a)) === 0) && ((b % (2 * a)) === 0)) {
                    x1 = ((-b + Math.sqrt(Math.abs(discriminant))) / (2 * a)).toString() + 'i';
                    x2 = ((-b - Math.sqrt(Math.abs(discriminant))) / (2 * a)).toString() + 'i';
                }
                else {//simplify Numerator
                    x1 = (-b + Math.sqrt(Math.abs(discriminant))).toString() + 'i/' + (2 * a).toString();
                    x2 = (-b - Math.sqrt(Math.abs(discriminant))).toString() + 'i/' + (2 * a).toString();
                }
            }
            else { //discrIsSquare === false
                if (isBZero) {//term only involves sqrt part of numberator and denominator.
                    x1 = '\sqrt(' + Math.abs(discriminant).toString() + 'i)/' + (2 * a).toString();
                    x2 = '-\sqrt(' + Math.abs(discriminant).toString() + 'i)/' + (2 * a).toString();
                }
                else {//discriminant is not a square and b is not zero, we don't simplify
                    x1 = '(' + (-b).toString() + '+\sqrt(' + Math.abs(discriminant).toString() + 'i) )/' + (2 * a).toString();
                    x2 = '(' + (-b).toString() + '-\sqrt(' + Math.abs(discriminant).toString() + 'i) )/' + (2 * a).toString();
                }
            }
        }
        else {//discParity ===0 discriminant is 0, so considering -b/2a
            if ((b % (2 * a)) === 0) {
                x1 = (b / (2 * a)).toString();
                x2 = (b / (2 * a)).toString();
            }
            else { //no square root in answer and don't simplify
                x1 = (-b).toString() + '/' + (2 * a).toString();
                x2 = (-b).toString() + '/' + (2 * a).toString();
            }

        }
        if (x1 === x2) {//we have a double root because the discriminant was zero!
            quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br> 
            Answer is double root because the discriminant, -b-4*a*c, is 0. 
            <br> The answer is x = ${x1}`;
        }
        else {//answer is not a double root.
            if (discParity === -1) {
                quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br> 
                Answer is imaginary because the discriminant, -b-4*a*c, is ${discriminant}. 
                <br> The answer is x = ${x1} or x = ${x2}`;
            }
            else {//answer is real!!!
                quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br> 
                Answer is real because the discriminant, -b-4*a*c, is ${discriminant}. 
                <br> The answer is x = ${x1} or x = ${x2}`;
            }
        }
    }

    // let discriminantStr;
    // console.log(discriminant);
    // if (discriminant < 0) {
    //     discriminantStr = Math.abs(discriminant).toString();
    //     const x1 = '(' + (-b).toString() + ' + \sqrt(' + discriminantStr + ')i)/' + (2 * a);
    //     const x2 = '(' + (-b).toString() + ' - \sqrt(' + discriminantStr + ')i)/' + (2 * a);
    //     console.log(x1);
    //     console.log(x2);
    //     quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br> 
    //     Answer is imaginary because the discriminant, -b-4*a*c, is ${discriminant} 
    //     <br> The answer is x = ${x1} <br> or <br> x = ${x2}`;
    // }
    // else {
    //     discriminantStr = discriminant.toString();
    //     const x1 = '(' + (-b).toString() + ' + \sqrt(' + discriminantStr + '))/' + (2 * a);
    //     const x2 = '(' + (-b).toString() + ' - \sqrt(' + discriminantStr + '))/' + (2 * a);
    //     console.log(x1);
    //     console.log(x2);
    //     quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br>
    //     Answer is real because the discriminant, -b-4*a*c, is ${discriminant}
    //     <br> The answer is x = ${x1} <br> or <br> x = ${x2}`;
    // }
}



//}


// function quadratic2() {
//     const quadraticAnswerDiv = document.getElementById('quadraticAnswer');
//     const a = document.getElementById('coefXSqrd').value;
//     const b = document.getElementById('coefX').value;
//     const c = document.getElementById('constant').value;
//     //ax^2 + bx + c = 0
//     //x = (-b + \sqrt(b^2 -(4*a*c)))/(2*a)
//     //x = (-b - \sqrt(b^2 -(4*a*c)))/(2*a)

//     console.log('Given: ', a, 'x^2 + ', b, 'x + ', c, ' = 0');
//     const discriminant = Math.pow(b, 2) - (4 * a * c);
//     let discriminantStr;
//     console.log(discriminant);
//     if (discriminant < 0) {
//         discriminantStr = Math.abs(discriminant).toString();
//         const x1 = '(' + (-b).toString() + ' + \sqrt(' + discriminantStr + ')i)/' + (2 * a);
//         const x2 = '(' + (-b).toString() + ' - \sqrt(' + discriminantStr + ')i)/' + (2 * a);
//         console.log(x1);
//         console.log(x2);
//         quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br> 
//         Answer is imaginary because the discriminant, -b-4*a*c, is ${discriminant} 
//         <br> The answer is x = ${x1} <br> or <br> x = ${x2}`;
//     }
//     else {
//         discriminantStr = discriminant.toString();
//         const x1 = '(' + (-b).toString() + ' + \sqrt(' + discriminantStr + '))/' + (2 * a);
//         const x2 = '(' + (-b).toString() + ' - \sqrt(' + discriminantStr + '))/' + (2 * a);
//         console.log(x1);
//         console.log(x2);
//         quadraticAnswerDiv.innerHTML = `Given: ${a}x^2 + ${b}x + ${c} = 0 <br>
//         Answer is real because the discriminant, -b-4*a*c, is ${discriminant}
//         <br> The answer is x = ${x1} <br> or <br> x = ${x2}`;
//     }


// }