//we need ideas array
var ideas = [];

//id selectors
var saveButton = document.getElementById("saveButton");
var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");
var ideaCard = document.getElementById("ideaSection");

//event handlers
saveButton.addEventListener("click", createIdeaCard);

//functions
function createIdeaCard() {
    var newCard = new Idea(titleInput.value, bodyInput.value);
    ideas.push(newCard);
    renderCard(newCard.id, newCard.title, newCard.body);
    titleInput.value = "";
    bodyInput.value = "";
}
function renderCard(id, title, body) {
    ideaCard.innerHTML +=
    `<section class="idea-card" id=${id}>
        <div class="top-bar">
            <img class="star-active" src="./assets/star-active.svg" alt="red star">
            <img class="delete" src="./assets/delete.svg" alt="white x">
        </div>
        <h3 class="card-title">${title}</h3>
        <p class="card-body">${body}</p>
        <div class="comment-bar">
            <img class="comment-cross" src="./assets/comment.svg" alt="plus sign">
            <p class="comment-input">Comment</p>
        </div>
    </section>`;
}
