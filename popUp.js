let showPopup = document.querySelector('.popUpBox');
let showOverlay = document.querySelector('.popup-overlay');

 function addPopup(){
    showOverlay.style.display = 'block';
    showPopup.style.display = 'block';
 }

let container = document.querySelector('.container');
let addBook = document.getElementById('add'); 
let deleteBook = document.getElementById('delete');
let bookName = document.getElementById('book-name');
let bookAuthor = document.getElementById('book-author');
let bookDescription = document.getElementById('book-detail');

addBook.addEventListener('click',function(event){
    let div = document.createElement("div");
    div.setAttribute("class","book-container")
    div.innerHTML = `<h1>${bookName.value}</h1>
    <h4>${bookAuthor.value}</h4>
    <p>${bookDescription.value}</p>
    <button onclick="deleteBooks(event)" >Delete</button>`
    container.append(div)
    showPopup.style.display = 'none';
    showOverlay.style.display = 'none';
    event.preventDefault();
}
);

function deleteBooks(event){
    event.target.parentElement.remove();
}

let cancelBook = document.getElementById('cancel');
cancelBook.addEventListener('click',function(event) {
    event.preventDefault();
    showOverlay.style.display = 'none';
    showPopup.style.display = 'none';
}
);
