function onButtonPress(buttonId, newClassToAssign) {
  const button = document.querySelector(buttonId);
  button.addEventListener("click", function () {
    const jumbatronDiv = document.querySelector(".jumbotron");
    jumbatronDiv.className = "jumbotron " + newClassToAssign;
  });
}
onButtonPress("#bluebtn", "blue");
onButtonPress("#orangeBtn", "orange");
onButtonPress("#greenBtn", "green");
