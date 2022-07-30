//we need ideas array
var ideas = [];

//id selectors
var saveButton = document.getElementById("saveButton");
var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");
var ideaSection = document.getElementById("ideaSection");
var deleteButton = document.getElementById("deleteButton");
var starImage = document.querySelector(".star-icon");

//Event Handlers
saveButton.addEventListener("click", createIdeaCard);
titleInput.addEventListener("keyup", enableButton);
bodyInput.addEventListener("keyup", enableButton);
ideaSection.addEventListener("click", deleteCard);
ideaSection.addEventListener("click", favoriteCard);

//functions
function createIdeaCard() {
    var newCard = new Idea(titleInput.value, bodyInput.value);

    ideas.push(newCard);
    renderCard(newCard.id, newCard.title, newCard.body);
    titleInput.value = "";
    bodyInput.value = "";

    enableButton();
}

function renderCard(id, title, body) {
    //build off of the Array here
    ideaSection.innerHTML +=
    `<section class="idea-card">
        <div class="top-bar">
            <img class="star-icon" src="./assets/star.svg" alt="red star" id="star-${id}">
            <img class="delete" src="./assets/delete.svg" alt="white x" id="delete-${id}">
        </div>
        <h3 class="card-title">${title}</h3>
        <p class="card-body">${body}</p>
        <div class="comment-bar">
            <img class="comment-cross" src="./assets/comment.svg" alt="plus sign">
            <p class="comment-input">Comment</p>
        </div>
    </section>`;
}

function enableButton() {
    if (titleInput.value === "" || bodyInput.value === "") {
        saveButton.disabled = true;
        saveButton.classList.add("disable-button");
    } else {
        saveButton.disabled = false;
        saveButton.classList.remove("disable-button");
    }
}

function deleteCard(event) {
    var deleteCardId = event.target.id;   

    for(var i=0; i < ideas.length; i++){
        if(deleteCardId === `delete-${ideas[i].id}`){
            ideas.splice(i, 1);
        }
    }

    if(event.target.classList.contains("delete")){
        event.target.closest("section").remove();
    }
}

function favoriteCard(event) {
    var cardId = event.target.id;

    for(var i=0; i < ideas.length; i++){
        if(cardId === `star-${ideas[i].id}` && !ideas[i].star){
            ideas[i].star = true;
            event.target.src = "./assets/star-active.svg";
            event.target.alt = "favorited"
        } else {
            ideas[i].star = false;
            event.target.src = "./assets/star.svg";
            event.target.alt = "unfavorited"
        }
    }
}