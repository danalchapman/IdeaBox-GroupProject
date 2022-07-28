//we need ideas array
var ideas = [];

//id selectors
var saveButton = document.getElementById("saveButton");
var titleInput = document.getElementById("titleInput");
var bodyInput = document.getElementById("bodyInput");

//event handlers
saveButton.addEventListener("click", createIdeaCard);

//functions
function createIdeaCard() {
    var newCard = new Idea(titleInput.value, bodyInput.value);
    ideas.push(newCard);
    console.log(ideas)
}