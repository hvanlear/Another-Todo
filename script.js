const form = document.querySelector(".txt-input-form");
const input = document.querySelector(".txt-input-field");
const todoList = document.querySelector(".todo-list");

//Event Delegation for  the delete button
todoList.addEventListener("click", function (e) {
  if (e.target.classList.value === "gg-remove-r") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    console.log("you clicked a item");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = document.createElement("li");
  const removeBtn = document.createElement("button");
  newTodo.classList.add("todo", "todo-item");
  newTodo.innerText = input.value;
  input.value = "";
  todoList.appendChild(newTodo);
  console.log(newTodo);
});

const createDelete = () => {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "btn-delete");
};
