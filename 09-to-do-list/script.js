const input = document.getElementById("input");
const form = document.getElementById("form");
const toDos = document.getElementById("todos");
const local_todos = JSON.parse(localStorage.getItem("local_todos"));
console.log("this is local_todos", local_todos);

if (local_todos) {
  local_todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  console.log("hello");
  let input_value = input.value;
  if (todo) {
    input_value = todo.text;
  }
  let to_do_li = document.createElement("li");
  to_do_li.innerText = input_value;
  if (todo && todo.isCompleted) {
    to_do_li.classList.add("completed");
  }

  to_do_li.addEventListener("click", function () {
    to_do_li.classList.toggle("completed");
    updateLs();
  });

  to_do_li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    to_do_li.remove();
    updateLs();
  });
  toDos.appendChild(to_do_li);
  input.value = "";
  updateLs();
}

function updateLs() {
  todolis = document.querySelectorAll("li");

  let todo_value = [];
  todolis.forEach((todo) => {
    todo_value.push({
      text: todo.innerText,
      isCompleted: todo.classList.contains("completed"),
    });
  });
  console.log(todo_value);
  console.log(JSON.stringify(todo_value));
  localStorage.setItem("local_todos", JSON.stringify(todo_value));
}
