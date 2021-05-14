const myLibrary = [];
const libraryTable = document.querySelector("#libraryTable");
const myForm = document.querySelector("#myForm");

function Book() {}
Book.prototype.bookDetails = function () {
  console.log(
    `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
  );
};

function FantasyBook(title, author, pages, read, genre) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
}

FantasyBook.prototype = Object.create(Book.prototype);

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let genre = document.querySelector("#genre").value;
  let read = document.querySelector("#read").value;
  const newLibraryBook = new FantasyBook(title, author, pages, read, genre);
  myLibrary.push(newLibraryBook);
  updateLibrary();
  addBookToggle();
  return false;
}

function updateLibrary() {
  var book = myLibrary[myLibrary.length - 1];
  var rowNum = myLibrary.length;
  var row = libraryTable.insertRow(libraryTable.rows.length);
  var title = row.insertCell(0);
  var author = row.insertCell(1);
  var pages = row.insertCell(2);
  var read = row.insertCell(3);
  var buttons = row.insertCell(4);
  var readButton = row.insertCell(5);

  title.innerHTML = book.title;
  author.innerHTML = book.author;
  pages.innerHTML = book.pages;
  read.innerHTML = book.read;
  read.id = "read" + rowNum;

  buttons.id = rowNum;
  buttons.innerHTML = `<button class='deleteButton button' onclick='deleteFunction(this)'>Delete Book</button>`;

  readButton.innerHTML = `<button class='updateButton button' onclick='readUpdate(${rowNum})'>Book Read</button>`;
}
function deleteFunction(rowNum) {
  var rowToDeleteIndex = rowNum.parentNode.parentNode.rowIndex;
  libraryTable.deleteRow(rowToDeleteIndex);
}

function readUpdate(readNum) {
  var readDataCell = document.querySelector("#read" + readNum);
  if (readDataCell.innerHTML === "No") {
    readDataCell.innerHTML = "Yes";
  } else {
    readDataCell.innerHTML = "No";
  }
}

function addBookToggle() {
  myForm.classList.toggle("invisible");
}
