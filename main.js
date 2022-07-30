//we need ideas array
var ideas = [];

//id selectors
var saveButton = document.getElementById("saveButton");
var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");
var ideaSection = document.getElementById("ideaSection");
var deleteButton = document.getElementById("deleteButton");

//event handlers
window.addEventListener("load", enableButton);
saveButton.addEventListener("click", createIdeaCard);
titleInput.addEventListener("keydown", enableButton);
bodyInput.addEventListener("keydown", enableButton);
ideaSection.addEventListener("click", deleteCard);


//functions
function createIdeaCard() {
    // prevent.default would go here
    var newCard = new Idea(titleInput.value, bodyInput.value);

    ideas.push(newCard);
    renderCard(newCard.id, newCard.title, newCard.body);
    titleInput.value = "";
    bodyInput.value = "";

    enableButton();
}

function renderCard(id, title, body) {
    ideaSection.innerHTML +=
    `<section class="idea-card">
        <div class="top-bar">
            <img class="star-active" src="./assets/star-active.svg" alt="red star">
            <img class="delete" src="./assets/delete.svg" alt="white x" id=${id}>
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
    var cardId = parseInt(event.target.id);    

    for(var i=0; i < ideas.length; i++){
        if(cardId === ideas[i].id){
            ideas.splice(i, 1);
        }
    }

    if(event.target.classList.contains("delete")){
        event.target.closest("section").remove();
    }
}