console.log("script loaded");

window.onload = function () {
  const buttonMathExternalAPI = document.getElementById("mathExternalAPI");
  buttonMathExternalAPI.addEventListener("click", simplificationOnScreen); //used to use function simplificationOnScreen
  // const buttonNewton = document.getElementById("useNewton");
  // buttonNewton.addEventListener("click", useNewtonAPI);
  // const buttonEvaluator = document.getElementById("evaluator");
  // buttonEvaluator.addEventListener("click", useEvaluatorFunction);
};

function linkToAPI(e) {
  console.log(e);
  console.log("go to external API now!");
  const externalAPIAnswer = document.getElementById("hardCodedmathAPIAnswer");
  fetch("http://api.mathjs.org/v4/?expr=2*(7-3)")
    .then((response) => {
      return response.json();
    })
    .then((responseConverted) => {
      console.log(responseConverted);
      externalAPIAnswer.innerHTML = responseConverted;
    });
}

function simplificationOnScreen() {
  const putSimplifiedAnswerHere = document.getElementById("simplifiedExpr");
  const toSimplify = document.getElementById("expression").value;
  console.log(toSimplify);
  const toSimplifyInCorrectForm = encodeURIComponent(toSimplify);
  console.log(typeof toSimplifyInCorrectForm);

  const url = "http://api.mathjs.org/v4/?expr=" + toSimplifyInCorrectForm;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((responseConverted) => {
      console.log(responseConverted);
      putSimplifiedAnswerHere.innerHTML =
        "<h4>After simplifying, the expression becomes " +
        responseConverted +
        "</h4>";
    });
}

function useNewtonAPI() {
  const AnswerGoesHere = document.getElementById("simplifiedExprWithNewton");
  const toSimplify = document.getElementById("expression").value;
  console.log(toSimplify);
  const correctForm = encodeURIComponent(toSimplify);
  console.log(typeof correctForm);

  const url = "https://newton.now.sh/simplify/" + correctForm;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((responseConverted) => {
      console.log(responseConverted);
      AnswerGoesHere.innerHTML =
        "<h4>After simplifying, the expression becomes " +
        responseConverted +
        "</h4>";
    });
}

function useEvaluatorFunction() {
  const mexp = require("math-expression-evaluator");
  const answer = document.getElementById("simplifiedWithEvaluator");
  const toSimplify = document.getElementById("expression").value;
  console.log(toSimplify);
  const simplified = mexp.eval(toSimplify);
  answer.innerHTML =
    "<h4>After simplifying, the expression becomes " + simplified + "</h4>";
}
