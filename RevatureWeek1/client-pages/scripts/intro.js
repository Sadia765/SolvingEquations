'use strict'
//strict mode makes JS a little bit safer, makes some silent errors get thrown instead + more

function intro(){
    //writing some JS in this file, the classic:

    console.log('Hello World');



    //We've seen the basics of datatypes, let's check out some Objects and Arrays.
    //This is how we can create an empty Object. The curly braces denote an "Object literal"
    let myObj = {};

    //This is an object with a single property. It looks liek JSON (JS Object Notation)
    let myOtherObj = {
        propertyOne: 'hello'
    }

    //access properties on objects using a .
    console.log(myOtherObj.propertyOne);//hello

    //if we access a property that doesn't exist, its value is undefined
    console.log(myOtherObj.propertyTwo);

    //Object in JS are nothing more than a collection of key-value pairs called properties.
    //the keys are strings, the values are ANY DATA TYPE
    myObj ={
        stringProp:'strings',
        numberProp: 45,
        booleanProp: true,
        nullProp: null,
        //undefined
        objectProp: {},
        arrayProp: [1,2,3], //array literal
        functionProp: console.log //now this is interesting!
    }

    //This line assigns the function console.log to the variable test
    //after this line, test holds a function
    let test = console.log;

    console.log(test);
    console.log(typeof test);

    //This line assigns the *return value* of console.log('hello') to the variable testTwo
    //after this line, testTwo holds undefined
    let testTwo = console.log('hello');

    // jumping back to Objects, in addition to accessing properties with a .
    //we can access them using ["propname"]
    console.log(myObj['numberProp']);

    //using a for-in loop to print the property names of an Object:
    for(let prop in myObj){
        console.log(prop);
        console.log(myObj[prop]);
    }

    //In Java, you had to concatenate Strings together to produce nice logging messages
    //In JS, we have a much nicer too: Template literals. These are written using ` backticks
    // and let us mix string content and variables easily.
    let value = 'goodbye';
    let otherValue = 4467;

    console.log(`Value is ${value}, and other value is ${otherValue}`);

    //template literals evaluate the JS in ${}, so we can do things like:
    console.log(`The sume is ${2+4+7+3}`);

    for(let prop in myObj){
        console.log(`Property: ${prop}, Value: ${myObj[prop]}`)
    }

    //Arrays are similar to arraylists. So Array in JS are automatically variable length
    //and they can contain multiple different datatypes.

    let myArr = [1,2,3,'four'];

    myArr.push('new element');

    console.log(myArr);

    //classic for loop:
    for(let i =0; i<myArr.length; i++){
        console.log(`Array element ${i}: ${myArr[i]}`);
    }

    //for-of loop to loop through elements of an array:
    for(let element of myArr){
        console.log(`Array element: ${element}`);
    }

    //There are 3 array methods we'll pay special attention to later:
    //filter, map, and reduce
}

//greab the button element from the document
let introButton = document.getElementById("intro");

//assign our function, intro, to be teh onclick function of the button.
introButton.onclick=intro;

//This is Adam's style:
//introButton.addEventListener('click', intro);

//Another convenient feature in JS (ES6) is "arrow functions"
//ways to declare a function in JS:
function myFunc(x){
    return x+3;
}

let myOtherFunc = function(x){
    return x+5;
}

//arrow functions: Adam's preference
let myArrowFunction = (x) => {
    return x+7;
}

//even more shorthand, but I won't use this:
let myShorthandArrowFunc = x => x+9;

//Arrow functions make it easy to define functions inline:
//we call this arrow function anonymous
document.getElementsByClassName('jumbotron')[0].onclick = () => {alert('clicked jumbotron!')}