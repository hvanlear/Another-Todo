const form = document.querySelector(".txt-input-form");
const input = document.querySelector(".txt-input-field");
const todoList = document.querySelector(".todo-list");
const todoItem = document.querySelector(".todo-item");
const todoId = document.querySelector(".todo-id");
let i = 0; //cloned element ID

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
  todoId.innerText = input.value;
  duplicate();
  //   const newTodo = document.createElement("li");
  const removeBtn = document.createElement("button");
  //   newTodo.classList.add("todo", "todo-item");
  //   newTodo.innerText = input.value;
  //   todoList.appendChild(newTodo);
  input.value = "";
});

const createDelete = () => {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "btn-delete");
};
//function to clone todo item LI
let duplicate = function () {
  let clone = todoItem.cloneNode(true);
  clone.id = "";
  todoItem.parentNode.appendChild(clone);
};

//bug if there is nothing on the page the clone will fail.
//possible fix woould be using the template tag in heml
//also the chaning li at the top is because there is something already
//on the screen
