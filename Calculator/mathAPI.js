console.log("script loaded");

window.onload = function () {
  // const buttonExternalAPI = document.getElementById("hardCodedMathExternalAPI");
  // buttonExternalAPI.addEventListener("click", linkToAPI);
  const buttonMathExternalAPI = document.getElementById("mathExternalAPI");
  buttonMathExternalAPI.addEventListener("click", simplificationOnScreen);
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
