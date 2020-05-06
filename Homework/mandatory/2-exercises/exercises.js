/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

function exerciseOne(arrayOfPeople) {
  const contentDiv = document.querySelector("#content");
  arrayOfPeople.forEach(function (person) {
    const nameHeader = document.createElement("h1");
    const jobHeader = document.createElement("h2");
    contentDiv.appendChild(nameHeader);
    contentDiv.appendChild(jobHeader);
    nameHeader.innerText = person.name;
    jobHeader.innerText = person.job;
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
  const list = document.createElement("ul");
  const contentDiv = document.querySelector("#content");
  for (let i = 0; i < shopping.length; i++) {
    const listElement = document.createElement("li");
    contentDiv.appendChild(list);
    listElement.innerText = shopping[i];
    list.appendChild(listElement);
  }
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  books[0].coverLink =
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg";
  books[1].coverLink =
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg";
  books[2].coverLink =
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg";

  const contentDiv = document.querySelector("#content");
  const bookList = document.createElement("ul");
  contentDiv.appendChild(bookList);
  books.forEach(function (book, index) {
    const bookDetailsli = document.createElement("li");
    const bookDetailsParagraph = document.createElement("p");
    const bookImage = document.createElement("img");
    if (book.alreadyRead) {
      bookDetailsli.style.background = "green";
    } else {
      bookDetailsli.style.background = "red";
    }
    bookImage.setAttribute("src", book.coverLink);
    bookList.appendChild(bookDetailsli);
    bookDetailsli.appendChild(bookDetailsParagraph);
    bookDetailsli.appendChild(bookImage);

    bookDetailsParagraph.innerText = book.title + " - " + book.author;
    bookDetailsParagraph.id = "book-" + index;
  });
}

//for (let i = 0; i < books.length; i++)

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

exerciseThree(books);
