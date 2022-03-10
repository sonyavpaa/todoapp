const taskInput = document.querySelector("#newItem");
let list = document.querySelector(".list");
const items = document.querySelectorAll("li");
let checkboxes = document.querySelectorAll(".checkbox");

window.addEventListener("keyup", async (e) => {
  checkboxes = document.querySelectorAll(".checkbox");
  await addBoxListeners(checkboxes);
});
window.addEventListener("click", async (e) => {
  checkboxes = document.querySelectorAll(".checkbox");
  await addBoxListeners(checkboxes);
});

const addBoxListeners = async (checkboxes) => {
  await checkboxes.forEach(async (checkbox) => {
    await checkbox.addEventListener("click", async (e) => {
      if (e.currentTarget.checked === true) {
        await list.removeChild(e.currentTarget.parentNode);
      }
    });
  });
};

taskInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addItemToList(taskInput.value);
    taskInput.value = "";
  }
});

const addItemToList = (newTask) => {
  list.innerHTML += `<li class="container">
  <label
    ><p>${newTask}</p></label>
    <input class="checkbox" type="checkbox" />
</li>`;
};
