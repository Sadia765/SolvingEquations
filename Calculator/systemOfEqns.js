console.log('script loaded');

window.onload = function(){
    const systemQuad = document.getElementById('systemButton');
    systemQuad.addEventListener('click', solveEqns);
}

function solveEqns(){
    const solvEqnsAnswerDiv = document.getElementById('solveSystem');
    const a = parseInt(document.getElementById('aInput').value);
    const b = parseInt(document.getElementById('bInput').value);
    const c = parseInt(document.getElementById('cInput').value);
    const d = parseInt(document.getElementById('dInput').value);
    const e = parseInt(document.getElementById('eInput').value);
    const f = parseInt(document.getElementById('fInput').value);
    // ax + by  = c
    // dx + ey  = f
    //x = (-b + \sqrt(b^2 -(4*a*c)))/(2*a)
    //x = (-b - \sqrt(b^2 -(4*a*c)))/(2*a)
    
    console.log('Given: ', a,'x + ', b, 'y  = ', c);
    console.log('Given: ', d,'x + ', e, 'y  = ', f);

    const matrix = [[a,b,c],[d,e,f]];
    console.log(matrix);

    for(var i = 0; i<matrix.length; i++){
        //in all rows except ith row, want entry at i to be 0.
        for(var j = 0; j<matrix.length; j++){
          if(j!=i && matrix[j][i] !=0 && matrix[i][i] !=0){
            matrix[j] = matrixSubtraction(matrixScalarMultiply(matrix[j][i] , matrix[i]),matrixScalarMultiply(matrix[i][i], matrix[j]));
          }
        }
      }
        //make each leading coefficent 1.
      for(var k = 0; k<matrix.length; k++){
        if(matrix[k][k] != 0){
          matrix[k]= matrixScalarMultiply(1/(matrix[k][k]), matrix[k]);
        }
        
      }
    console.log(matrix);
    let display = readSolution(matrix);
    //then let innerHTML be this display variable.
    solvEqnsAnswerDiv.innerHTML = `Given: ${a}x + ${b}y  = ${c} and ${d}x + ${e}y  = ${f} <br> ${display}`;
    
    
}

//define matrix subtraction
function matrixSubtraction(matrix1, matrix2){
    var matrix = [];
    // if(!sameSize(matrix1,matrix2)){
    //   return 'Error, parameters are either not matrices or have different sizes.';
    // }
    //this is if both matrices have 1 row. 
    //For now, we know that all matrices coming in are 2x3 because of the input boxes on webpage.
    if((typeof matrix1[0] == typeof 0)&&(typeof matrix2[0] == typeof 0)){
      for(var i = 0; i<matrix1.length; i++){
        matrix[i] = matrix1[i]-matrix2[i];
      }
      return matrix;
    }
    //matrices are both m x n:
    else if((typeof matrix1[0] == typeof [0])&&(typeof matrix2[0] == typeof [0])){
      for(var i = 0; i<matrix1.length; i++){
        matrix[i] = []
        for(var j = 0; j<matrix1[i].length; j++){
          matrix[i][j] = matrix1[i][j]-matrix2[i][j];
        }
      } return matrix;
    }
  }
  //define scalar multiplication
function matrixScalarMultiply(scalar, matrix1){
    var matrix = [];
  
    // if(findSize(matrix1)[0]==0){
    //   return 'Error, parameter is not a matrix.';
    // }
    //matrix is 1 x n:
    //console.log(scalar, matrix);
    if(typeof matrix1[0] == typeof 0){
      for(var i = 0; i<matrix1.length; i++){
        if(matrix1[i]==0 || scalar == 0){
          matrix[i] = 0;
        }
        else{
          matrix[i] = scalar*matrix1[i];
        }
      }
      return matrix;
    }
    //matrix is m x n:
    else if(typeof matrix1[0] == typeof [0]){
      for(var i = 0; i<matrix1.length; i++){
        matrix[i] = [];
        for(var j = 0; j<matrix1[i].length; j++){
          if(matrix1[i][j] == 0 || scalar == 0){
            matrix[i][j] = 0;
          }
          else{
            matrix[i][j] = scalar*matrix1[i][j];
          }
        }
      } return matrix;
    }
  }
//This reads solutions of system of 2 equations.
  function readSolution(matrix){
    if(matrix[1][0] == 0 && matrix[1][1] == 0){
      if(matrix[1][2] !=0){
        return 'No Solution! These lines are parallel, so they never intersect!';
      }
      else{
        return 'Infinitely many solutions. One solution is ('+ matrix[0][2] +', 0)';
      }
    }
    else{
  
      return '('+ matrix[0][2].toString()+ ','+ matrix[1][2].toString()+')';
    }
  }