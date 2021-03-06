/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("div"));
console.log(document.querySelector("#jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text
"Thanks for visiting Bikes for Refugees!"
*/

let AlertButton = document.querySelector("#alertBtn");
AlertButton.addEventListener("click", alertSomething);
function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour'
button is clicked.
*/

let BacgroundColorButton = document.querySelector("#bgrChangeBtn");
BacgroundColorButton.addEventListener("click", changeBckGrndColor);
function changeBckGrndColor() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "lightblue";
}
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the
buttons that says "Read more below."
*/

let AddTextButton = document.querySelector("#addTextBtn");
AddTextButton.addEventListener("click", addText);

function addText() {
  let placeToAdd = document.querySelector(".buttons");
  let createParagraph = document.querySelector("p");
  createParagraph.innerText = "Read more below.";
  placeToAdd.appendChild(createParagraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let makeLinksBigger = document.querySelector("#largerLinksBtn");
makeLinksBigger.addEventListener("click", makeLinksLarger);

function makeLinksLarger() {
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].style.fontSize = "30px";
  }
}
