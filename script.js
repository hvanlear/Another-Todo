const form = document.querySelector(".txt-input-form");
const input = document.querySelector(".txt-input-field");
const todoList = document.querySelector(".todo-list");

//Event Delegation for  the delete button and strike through
todoList.addEventListener("click", function (e) {
  if (e.target.classList.value === "gg-remove-r") {
    e.target.parentElement.parentElement.parentElement.remove();
  } else if (e.target.tagName === "SPAN") {
    if (!e.target.classList.contains("strike")) {
      e.target.classList.toggle("strike");
    } else {
      e.target.classList.remove("strike");
    }
  } else if (e.target.classList.value === "gg-pen") {
    // e.target.nextSibling.contentEditable = "true";
    e.target.parentElement.previousSibling.previousElementSibling.contentEditable =
      "true";
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

let edit = function () {};

//click
//selects the closes
