const button = document.getElementById("myBtn");

button?.addEventListener("click", () => {
  alert("Hello World!");

  // @ts-ignore
  const bgColor = button.style.backgroundColor;
  if (bgColor === "red") {
    // @ts-ignore
    button.style.backgroundColor = "blue";
  } else {
    // @ts-ignore
    button.style.backgroundColor = "red";
  }
});

const hoverBtn = document.getElementById("hover-btn");
const hiddenMessageText = document.getElementById("hidden-message");
if (!hiddenMessageText) {
  throw new Error("hidden-message element not found");
}
if (!hoverBtn) {
  throw new Error("hover-btn element not found");
}

const hiddenMessageClassList = hiddenMessageText.classList;

hoverBtn.addEventListener("mouseover", () => {
  hiddenMessageClassList.remove("hidden");
  hiddenMessageClassList.add("visible");
});

hoverBtn.addEventListener("mouseout", () => {
  hiddenMessageClassList.remove("visible");
  hiddenMessageClassList.add("hidden");
});

const submitBtn = document.getElementById("addTodo");
if (!submitBtn) {
  throw new Error("addTodo element not found");
}

const todoList = document.getElementById("todoList");
if (!todoList) {
  throw new Error("todoList element not found");
}

const newTodoInput = document.getElementById("newTodoInput");
if (!newTodoInput) {
  throw new Error("newTodoInput element not found");
}

submitBtn.addEventListener("click", submit);

newTodoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") submit();
});

function submit() {
  // @ts-expect-error
  const inputValue = newTodoInput?.value;

  if (!inputValue || inputValue.trim().length === 0) {
    return;
  }

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");

  const newTodoText = document.createElement("span");
  newTodoText.classList.add("todo-text");
  newTodoText.innerText = inputValue;

  // Create a delete button and append it to the todo item
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      todoList?.removeChild(newTodo);
    }
  });

  newTodo.appendChild(newTodoText);
  newTodo.appendChild(deleteBtn);
  todoList?.appendChild(newTodo);

  // Clear the input after adding the todo
  newTodoInput.value = "";
}
