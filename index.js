// @ts-check

const name = "Tomas";
const birthDate = new Date("1990-01-01");

let numberOfCats = 2;

console.log("name:", name);
console.log("birthDate:", birthDate);
console.log("numberOfCats:", numberOfCats);

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function add(num1, num2) {
  return num1 + num2;
}

const sum = add(1, 3);
console.log("sum:", sum);

const cat1 = {
  name: "Fluffy",
  age: 3,
  gender: "female",
};

console.log("cat1:", cat1);

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

// const demoElement = document.getElementById("demo");
// const list = demoElement.classList;

// demoElement.addEventListener("click", () => {
//   if (!list.contains("myStyle")) {
//     list.add("myStyle");
//     return;
//   }

//   list.remove("myStyle");
// });

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
});

hoverBtn.addEventListener("mouseout", () => {
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

const newTodoText = document.getElementById("newTodoText");
if (!newTodoText) {
  throw new Error("newTodoText element not found");
}

submitBtn.addEventListener("click", () => {
  // @ts-expect-error
  const inputValue = newTodoText.value;

  const newTodo = document.createElement("li");
  newTodo.innerText = inputValue;
  todoList.appendChild(newTodo);
});

newTodoText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // @ts-expect-error
    const inputValue = newTodoText.value;

    const newTodo = document.createElement("li");
    newTodo.innerText = inputValue;
    todoList.appendChild(newTodo);
  }
});
