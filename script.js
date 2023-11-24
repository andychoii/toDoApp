console.log("hello");

const input = document.getElementById("input");

function addTask() {
  const task = input.value;
  if (task.trim() === "") {
    return;
  }
  const taskItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.classList.add("task-test");
  taskText.textContent = task;
  taskItem.appendChild(taskText);
  taskList.appendChild(taskItem);
}
