const taskInput = document.querySelector("#newItem");
const list = document.querySelector(".list");

taskInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addItemToList(taskInput.value);
    taskInput.value = "";
  }
});

const addItemToList = (newTask) => {
  list.innerHTML += `<li>${newTask}</li>`;
};
