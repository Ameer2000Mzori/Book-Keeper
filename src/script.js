// selecting our elements
const popUpInfoCard = document.getElementsByClassName("popUp-info-card")[0];
const addNewBookBtn = document.getElementsByClassName("add-btn")[0];
const closeInfoCard = document.getElementsByClassName("close-info-card")[0];
const bookMarkListWrapper = document.getElementsByClassName(
  "book-mark-list-wrapper"
)[0];

const saveBtn = document.getElementsByClassName("save-btn")[0];
const inputName = document.getElementsByClassName("inputName")[0];
const inputUrl = document.getElementsByClassName("inputUrl")[0];
const saveBtnWrapper = document.getElementsByClassName("save-btn-wrapper");

// our Obj
let bookObj = [
  {
    Name: "Google.com",
    Url: "google.com",
    // image: "https://www.svgrepo.com/show/303108/google-icon-logo.svg",
  },
];
console.log(bookObj);
//load data to our website
function loadData(bookObj) {
  const BookMarked = document.createElement("div");
  BookMarked.classList = "book-marked";

  const removeBtnWrapper = document.createElement("div");
  removeBtnWrapper.classList = "remove-btn-wrapper";

  const removeBookButton = document.createElement("button");
  removeBookButton.textContent = "X";
  removeBookButton.classList = "remove-book-button";
  removeBtnWrapper.appendChild(removeBookButton);

  const textImgWrap = document.createElement("div");
  textImgWrap.classList = "text-img-wrap";

  const markedBookImg = document.createElement("img");
  markedBookImg.classList = "marked-book-img";
  //   markedBookImg.src = bookObj.image;
  markedBookImg.setAttribute("src", "");
  markedBookImg.alt = "img";
  textImgWrap.appendChild(markedBookImg);

  const aBooktext = document.createElement("a");
  aBooktext.classList = "a-book-text";
  aBooktext.textContent = bookObj.Name;
  aBooktext.setAttribute("href", `https://${bookObj.Url}`);
  aBooktext.setAttribute("target", "_blank");
  textImgWrap.appendChild(aBooktext);

  BookMarked.appendChild(removeBtnWrapper);
  BookMarked.appendChild(textImgWrap);

  bookMarkListWrapper.appendChild(BookMarked);

  removeBookButton.addEventListener("click", (e) => {
    const bookName =
      e.target.parentNode.nextElementSibling.lastElementChild.textContent;
    removeBook(bookName);
    console.log(bookName);
  });
}
function removeBook(bookName) {
  bookObj = bookObj.filter((book) => book.Name !== bookName);
  localStorage.setItem("bookObj", JSON.stringify(bookObj));
  bookMarkListWrapper.innerHTML = "";
  bookObj.forEach(loadData);
}
// deleteing our data from object

// our functions
function popUpHandler() {
  popUpInfoCard.classList.add("active");
}

//closing our popUp
function closePopUpHandler() {
  popUpInfoCard.classList.remove("active");
  inputName.value = "";
  inputUrl.value = "";
}

//saving new function
const errorMessage = document.getElementsByClassName("errorMessage")[0];
errorMessage.style.color = "red";

function saveNewBook() {
  let nameVal = inputName.value;
  let urlVal = inputUrl.value;

  if (nameVal && urlVal) {
    errorMessage.textContent = "";
    newObj = {
      Name: nameVal,
      Url: urlVal,
    };
    bookObj.push(newObj);
    bookMarkListWrapper.innerHTML = "";

    bookObj.forEach(loadData);
    localStorage.setItem("bookObj", JSON.stringify(bookObj));
    closePopUpHandler();
  } else {
    errorMessage.textContent = "please enter something";
  }
}

//on load

function onLoad() {
  const savedLocalData = localStorage.getItem("bookObj");
  bookObj = savedLocalData ? JSON.parse(savedLocalData) : [];
}

onLoad();

//our add eventlisnters
addNewBookBtn.addEventListener("click", popUpHandler);
closeInfoCard.addEventListener("click", closePopUpHandler);
saveBtn.addEventListener("click", saveNewBook);
bookObj.forEach(loadData);
