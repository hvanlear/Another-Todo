const form = document.querySelector(".txt-input-form");
const input = document.querySelector(".txt-input-field");
const todoList = document.querySelector(".todo-list");

//Event Delegation for  the delete button and strike through
todoList.addEventListener("click", function (e) {
  if (e.target.classList.value === "gg-remove-r") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.tagName === "SPAN") {
    e.target.classList.add("strike");
    console.log("you clicked a item");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  duplicate();
  input.value = "";
});

//function to clone todo item LI
let duplicate = function () {
  let content = document.querySelector("template").content;
  let toDoClone = content.querySelector("span");
  toDoClone.textContent = input.value;
  todoList.appendChild(document.importNode(content, true));
};

//bug if there is nothing on the page the clone will fail.
//possible fix woould be using the template tag in heml
//also the chaning li at the top is because there is something already
//on the screen
