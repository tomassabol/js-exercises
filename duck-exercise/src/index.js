// @ts-check

const name = prompt("What is your name?") ?? "Unknown";

const localStorageTodoList = localStorage.getItem("todo-list");

/**
 * @returns {Array<{id: string, question: string; userName: string}>}
 * @throws {Error}
 */
function getTodoListFromLocalStorage() {
  if (!localStorageTodoList) {
    localStorage.setItem("todo-list", JSON.stringify([]));
    return [];
  }

  try {
    return JSON.parse(localStorageTodoList);
  } catch (error) {
    console.error("Error parsing todo list from local storage", { error });
    localStorage.setItem("todo-list", JSON.stringify([]));
    return [];
  }
}

const form = document.getElementById("question-form");
const todoList = document.getElementById("todoList");

if (!form) {
  throw new Error("Element not found");
}
if (!todoList) {
  throw new Error("Element not found");
}

const storedTodoList = getTodoListFromLocalStorage();

// Hide todoList initially if there are no todos
if (storedTodoList.length === 0) {
  todoList.style.display = "none";
} else {
  // Add all todos from local storage to the ul list
  for (const todo of storedTodoList) {
    addTodo(todo.id, todo.question, todoList);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const todoText = formData.get("question-input");

  if (!todoText || todoText.toString().trim().length === 0) {
    alert("Please enter a valid todo.");
    return;
  }

  const todoId = generateUniqueId();
  addToLocalStorage(todoId, todoText.toString());
  addTodo(todoId, todoText.toString(), todoList);

  form.reset(); // Clear the form
  alert("Todo added successfully!");
});

/**
 * Generates a unique ID for each todo
 * @returns {string} - A unique ID string
 */
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

/**
 * Adds a todo item to the DOM
 * @param {string} id - The unique ID of the todo
 * @param {string} todoText - The text of the todo
 * @param {HTMLElement} todoList - The todo list element
 */
function addTodo(id, todoText, todoList) {
  const listItem = document.createElement("li");
  listItem.textContent = todoText;
  listItem.setAttribute("data-id", id);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      todoList.removeChild(listItem);
      removeFromLocalStorage(id);
      if (todoList.children.length === 0) {
        todoList.style.display = "none";
      }
    }
  });

  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // Show the todo list if it's hidden
  todoList.style.display = "block";
}

/**
 * Adds a todo item to localStorage
 * @param {string} id - The unique ID of the todo
 * @param {string} todoText - The text of the todo
 */
function addToLocalStorage(id, todoText) {
  storedTodoList.push({ id, question: todoText, userName: name });
  localStorage.setItem("todo-list", JSON.stringify(storedTodoList));
}

/**
 * Removes a todo item from localStorage by its ID
 * @param {string} id - The unique ID of the todo to be removed
 */
function removeFromLocalStorage(id) {
  const updatedTodoList = storedTodoList.filter((todo) => todo.id !== id);
  localStorage.setItem("todo-list", JSON.stringify(updatedTodoList));
}

const messageText = document.getElementById("message");
if (!messageText) {
  throw new Error("Element not found");
}

messageText.title = new Date().toLocaleString();
