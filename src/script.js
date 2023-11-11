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
var bookObj = [
  {
    Name: "Google.com",
    Url: "www.google.com",
    // image: "https://www.svgrepo.com/show/303108/google-icon-logo.svg",
  },
];

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
  markedBookImg.alt = "img";
  textImgWrap.appendChild(markedBookImg);

  const aBooktext = document.createElement("a");
  aBooktext.classList = "a-book-text";
  aBooktext.textContent = bookObj.Name;
  aBooktext.href = bookObj.Url;
  textImgWrap.appendChild(aBooktext);

  BookMarked.appendChild(removeBtnWrapper);
  BookMarked.appendChild(textImgWrap);

  bookMarkListWrapper.appendChild(BookMarked);
}

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
    console.log("good job");
    errorMessage.textContent = "";

    newObj = {
      Name: nameVal,
      Url: urlVal,
    };
    bookObj.push(newObj);
    bookMarkListWrapper.innerHTML = "";

    bookObj.forEach(loadData);
    localStorage.setItem("bookObj", JSON.stringify(bookObj));
  } else {
    errorMessage.textContent = "please enter something";
  }
}

//our add eventlisnters
addNewBookBtn.addEventListener("click", popUpHandler);
closeInfoCard.addEventListener("click", closePopUpHandler);
saveBtn.addEventListener("click", saveNewBook);
bookObj.forEach(loadData);

/*
 <div class="book-marked">
   <div class="remove-btn-wrapper">
     <button class="remove-book-button">X</button>
   </div>
   <div class="text-img-wrap">
     <img
       class="marked-book-img"
       src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
       alt=""
     />
     <a href="#" class="a-book-text"> GOOGLEsdasdadasdasda</a>
   </div>

*/
