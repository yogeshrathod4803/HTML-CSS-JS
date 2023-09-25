// Selecting elements from the DOM
let taskAdder = document.querySelector(".task-adder");
let taskBar = document.querySelector("#taskBar");
let taskList = document.querySelector(".task-list");
let taskContainer = document.querySelector(".task-container");

// Event listeners for adding tasks
taskAdder.addEventListener("click", () => {
  addTask();
});

taskBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to add a task
function addTask() {
  let taskValue = taskBar.value.trim();

  if (taskValue !== "") {
    // Create a new task element
    let taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
            <div class="task-text">${taskValue}</div>
            <div class="task-actions">
                <button class="task-done"><i class="fa-solid fa-check"></i></button>
                <button class="task-delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

    // Append the new task element to the task list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    taskBar.value = "";

    // Adding a click event listener to the task-done button
    let taskDone = taskItem.querySelector(".task-done");
    taskDone.addEventListener("click", () => {
      // Mark the task as finished
      taskItem.classList.add("task-finished");
    });

    // Adding a click event listener to the deleteTask button
    let taskDelete = taskItem.querySelector(".task-delete");
    taskDelete.addEventListener("click", () => {
      taskList.innerHTML = "";
    });
  }
}
